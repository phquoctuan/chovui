import {
  DEFAULT_LISTING_IMAGE_MAX_FILE_SIZE,
  DEFAULT_LISTING_IMAGE_MAX_FILES,
  LISTING_IMAGE_ACCEPTED_TYPES,
  AVATAR_IMAGE_MAX_FILE_SIZE,
  AVATAR_IMAGE_ACCEPTED_TYPES
} from "@/const";
import { NextResponse } from "next/server";

const LISTING_ALLOWED_TYPES = Object.keys(LISTING_IMAGE_ACCEPTED_TYPES);
const AVATAR_ALLOWED_TYPES = Object.keys(AVATAR_IMAGE_ACCEPTED_TYPES);


export function validateListingImageFile(file: File) {
  // 2. Kiểm tra định dạng file
  if (!LISTING_ALLOWED_TYPES.includes(file.type)) {
    return {
      response: NextResponse.json(
        {
          error: {
            code: "INVALID_FILE_TYPE",
            message: "Chỉ hỗ trợ JPG, PNG và WebP",
          },
        },
        { status: 400 }
      ),
    };
  }

  // 3. Kiểm tra kích thước file (rỗng)
  if (file.size <= 0) {
    return {
      response: NextResponse.json(
        {
          error: {
            code: "INVALID_FILE",
            message: "File hình ảnh không hợp lệ",
          },
        },
        { status: 400 }
      ),
    };
  }

  // 4. Kiểm tra kích thước file vượt quá giới hạn
  if (file.size > DEFAULT_LISTING_IMAGE_MAX_FILE_SIZE) {
    return {
      response: NextResponse.json(
        {
          error: {
            code: "FILE_TOO_LARGE",
            message: "Kích thước hình ảnh tối đa là 2 MB",
          },
        },
        { status: 400 }
      ),
    };
  }

  // Hợp lệ, không có lỗi
  return { response: null };
}

export function validateAvatarImageFile(file: File) {
  // 2. Kiểm tra định dạng file
  if (!AVATAR_ALLOWED_TYPES.includes(file.type)) {
    return {
      response: NextResponse.json(
        {
          error: {
            code: "INVALID_FILE_TYPE",
            message: "Chỉ hỗ trợ JPG, PNG và WebP",
          },
        },
        { status: 400 }
      ),
    };
  }

  // 3. Kiểm tra kích thước file (rỗng)
  if (file.size <= 0) {
    return {
      response: NextResponse.json(
        {
          error: {
            code: "INVALID_FILE",
            message: "File hình ảnh không hợp lệ",
          },
        },
        { status: 400 }
      ),
    };
  }

  // 4. Kiểm tra kích thước file vượt quá giới hạn
  if (file.size > AVATAR_IMAGE_MAX_FILE_SIZE) {
    return {
      response: NextResponse.json(
        {
          error: {
            code: "FILE_TOO_LARGE",
            message: "Kích thước hình ảnh tối đa là 2 MB",
          },
        },
        { status: 400 }
      ),
    };
  }

  // Hợp lệ, không có lỗi
  return { response: null };
}