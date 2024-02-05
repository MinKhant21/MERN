import { Response } from "express";

export const ResponseMessage = (
  res: Response,
  status: number,
  message: string,
  data: any = null
): Response => {
  return res.status(status).json({
    status,
    message,
    data,
  });
};
