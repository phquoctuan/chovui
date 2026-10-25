export const PAGE_SIZE_OPTIONS = [2, 10, 20, 30, 50] as const;
export const DEFAULT_PAGE_SIZE = 2;

export const DEFAULT_LISTING_IMAGE_MAX_FILES = 8;
export const LISTING_IMAGE_RESIZE = 800;
export const DEFAULT_LISTING_IMAGE_MAX_FILE_SIZE = 5 * 1024 * 1024; //5MB
export const LISTING_IMAGE_ACCEPTED_TYPES = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
  "image/webp": [".webp"],
};

export const AVATAR_IMAGE_MAX_FILE_SIZE = 10 * 1024 * 1024; //10MB
export const AVATAR_IMAGE_ACCEPTED_TYPES: Record<string, string[]> = {
  "image/jpeg": [".jpg"],
  "image/png": [".png"],
  "image/webp": [".webp"],
  "image/gif": [".gif"],
};
