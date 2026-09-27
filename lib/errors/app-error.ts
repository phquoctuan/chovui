export class AppError extends Error {
  public code: string;
  public statusCode: number;

  constructor(message: string, code: string, statusCode: number = 400) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
  }
}
// throw new AppError('Bạn chưa đăng nhập', 'UNAUTHORIZED', 401);