import { mkdir, writeFile, unlink } from "node:fs/promises";
import path from "node:path";

import type {
  ImageStorage,
  ImageUploadResult,
} from "./image-storage";

export class LocalImageStorage implements ImageStorage {
  private readonly uploadRelDir: string;
  private readonly uploadDir: string;

// Khởi tạo storage với thư mục tùy chỉnh cho avatar
// const avatarStorage = new LocalImageStorage(
//   path.join(process.cwd(), "public", "uploads", "avatars")
// );
  constructor(uploadRelativeDir?: string | null) {
    this.uploadRelDir = uploadRelativeDir?? path.join(
      "public",
      "uploads",
    );

    this.uploadDir = uploadRelativeDir? path.join(process.cwd(), uploadRelativeDir) : path.join(
      process.cwd(),
      "public",
      "uploads",
    );
  }

  async upload(
    file: File,
    key: string,
  ): Promise<ImageUploadResult> {
    await mkdir(this.uploadDir, {
      recursive: true,
    });

    const buffer = Buffer.from(
      await file.arrayBuffer(),
    );

    const filePath = path.join(
      this.uploadDir,
      key,
    );

    await mkdir(path.dirname(filePath), {
      recursive: true,
    });

    await writeFile(filePath, buffer);

    // Tính toán lại public URL tương ứng với uploadDir thực tế
    // Ví dụ nếu uploadDir chứa 'public', ta cắt phần 'public' đi để lấy URL truy cập từ web
    const relativePart = this.uploadDir.includes("public")
      ? this.uploadDir.split("public")[1].replaceAll(path.sep, "/")
      : "/uploads";

    return {
      url: `${relativePart}/${key}`.replace(/\/+/g, "/"),
      key,
    };
  }

  async delete(key: string): Promise<void> {
    const filePath = path.join(
      this.uploadDir,
      key,
    );

    try {
      await unlink(filePath);
    } catch (error) {
      if (
        error instanceof Error &&
        "code" in error &&
        error.code === "ENOENT"
      ) {
        return;
      }

      throw error;
    }
  }
}