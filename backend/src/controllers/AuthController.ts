import AuthService from "../services/auth/AuthService";
import { Request, Response } from "express";
import { ResponseMessage } from "../helpers/ResponseMessage";
class AuthController {
  private _authService = new AuthService();
  constructor() {
    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }
  async loginUser(req: Request, res: Response) {
    let { email, password, role }: any = req.body;
    let isExit = await this._authService.checkUserExit(email);
    if (!isExit) {
      ResponseMessage(res, 404, "User not Exit", "");
    }
    let data = await this._authService.loginWithEmailAndPassword(
      email,
      password,
      role
    );
    if (data.status != 200) {
      ResponseMessage(res, data.status, data.message);
    }
    ResponseMessage(res, data.status, data.message, data.data, data.token);
  }

  async registerUser(req: Request, res: Response) {}
}

export default AuthController;
