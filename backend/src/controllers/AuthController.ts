import { Request, Response } from 'express';
import { AuthRepository } from '../repository/AuthRepository';
const {User} = require('../models')
export class AuthController {
  private authRepo: AuthRepository;

  constructor(authRepo: AuthRepository = new AuthRepository(User)) {
    this.authRepo = authRepo;
  }

  async login(req: Request, res: Response) {
    try {
      const data: any = req.body;
      const user = await this.authRepo.login(data);
      res.json(user); 
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'An error occurred during login.' });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const data: any = req.body;
      const user = await this.authRepo.register(data);
      res.status(200).json(user); 
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ error: 'An error occurred during registration.' });
    }
  }
}
