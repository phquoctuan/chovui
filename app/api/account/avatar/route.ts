import { randomUUID } from "crypto";
import { mkdir, unlink, writeFile } from "fs/promises";
import path from "path";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { requireSession } from "@/lib/auth-session";
import { handleApiError } from "@/lib/errors/handle-api-error";
import { auth } from "@/lib/auth";
import { SellerProfileService } from "@/lib/services/seller-profile-service";
import {
  AVATAR_IMAGE_ACCEPTED_TYPES,
} from "@/const";
import { validateAvatarImageFile } from "@/lib/image/check-image";
import { avatarsPath, avatarsImageStorage } from "@/lib/storage";

// export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const session = await requireSession();

    if (!session) {
      return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "FILE_REQUIRED" }, { status: 400 });
    }

    const { response: errorResponse } = validateAvatarImageFile(file);
    if (errorResponse) {
      return errorResponse; // Trả về lỗi nếu không hợp lệ
    }

    const extension = AVATAR_IMAGE_ACCEPTED_TYPES[file.type][0];
    const filename = `${session.user.id}-${randomUUID()}${extension}`;

    // 6. Upload file
    const uploaded = await avatarsImageStorage.upload(file, filename);
    const avatarUrl = uploaded.url;
    console.log("avatarUrl:", avatarUrl);

    return NextResponse.json({
      data: {
        avatarUrl,
      },
    });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE() {
  try {
    const session = await requireSession();

    if (!session) {
      return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
    }

    const profile = await SellerProfileService.getProfile(session.user.id);

    if (!profile?.avatarUrl) {
      return NextResponse.json({
        data: {
          avatarUrl: null,
        },
      });
    }

    const avatarUrl = profile.avatarUrl;

    await SellerProfileService.updateProfile(session.user.id, {
      avatarUrl: null,
    });

    /*
     * Chỉ xóa file do Chovui quản lý.
     * Không cố xóa URL external.
     */
    if (avatarUrl.startsWith("/uploads/")) {
      const filename = path.basename(avatarUrl);

      const absolutePath = path.join(
        avatarsPath,
        filename,
      );

      try {
        await unlink(absolutePath);
      } catch {
        // File có thể đã không còn tồn tại.
      }
    }

    return NextResponse.json({
      data: {
        avatarUrl: null,
      },
    });
  } catch (error) {
    return handleApiError(error);
  }
}
