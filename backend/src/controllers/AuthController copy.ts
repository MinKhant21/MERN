import { Request, Response } from "express";
import { AuthRepository } from "../repository/AuthRepository";

export class AuthController {
  private authRepo: AuthRepository;

  constructor() {
    this.authRepo = new AuthRepository(); 
    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this); 
  }
  async loginUser(req: Request, res: Response) {
    try {
      console.log("first");
      let { email, role, password } = req.body;
      const user = await this.authRepo.login(email, role, password); 
      res.json(user);
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "An error occurred during login." });
    }
  }

  async registerUser(req: Request, res: Response) {
    try {
      const data: any = req.body;
      const user = await this.authRepo.register(data); // Use authRepo method
      res.json(user);
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ error: "An error occurred during registration." });
    }
  }
}
