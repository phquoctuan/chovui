export type ImageUploadResult = {
  url: string;
  key: string;
};

export interface ImageStorage {
  upload(
    file: File,
    key: string,
  ): Promise<ImageUploadResult>;

  delete(key: string): Promise<void>;
}