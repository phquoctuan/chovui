export type ResizeImageOptions = {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
};

const DEFAULT_OPTIONS: Required<ResizeImageOptions> = {
  maxWidth: 1600,
  maxHeight: 1600,
  quality: 0.8,
};

export async function resizeImage(
  file: File,
  options: ResizeImageOptions = {},
): Promise<File> {
  const {
    maxWidth,
    maxHeight,
    quality,
  } = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  if (!file.type.startsWith("image/")) {
    throw new Error("File phải là hình ảnh");
  }

  const bitmap = await createImageBitmap(
    file,
    {
      imageOrientation: "from-image",
    },
  );

  const originalWidth = bitmap.width;
  const originalHeight = bitmap.height;

  const scale = Math.min(
    maxWidth / originalWidth,
    maxHeight / originalHeight,
    1,
  );

  const width = Math.round(
    originalWidth * scale,
  );

  const height = Math.round(
    originalHeight * scale,
  );

  const canvas = document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");

  if (!context) {
    bitmap.close();
    throw new Error(
      "Không thể tạo Canvas 2D context để resize ảnh",
    );
  }

  context.drawImage(
    bitmap,
    0,
    0,
    width,
    height,
  );

  bitmap.close();

  const blob = await canvasToBlob(
    canvas,
    "image/webp",
    quality,
  );

  return new File(
    [blob],
    `${getBaseName(file.name)}.webp`,
    {
      type: "image/webp",
      lastModified: Date.now(),
    },
  );
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  type: string,
  quality: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(
            new Error(
              "Không thể tạo ảnh sau khi resize",
            ),
          );
          return;
        }

        resolve(blob);
      },
      type,
      quality,
    );
  });
}

function getBaseName(fileName: string): string {
  const lastDotIndex = fileName.lastIndexOf(".");

  if (lastDotIndex <= 0) {
    return fileName;
  }

  return fileName.slice(0, lastDotIndex);
}