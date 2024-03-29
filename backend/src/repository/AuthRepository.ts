import { generateToken, hashPassword, comparePassword } from "../helpers/auth";
const { User } = require("../models");
export class AuthRepository {
  async login(email: string, role: string, password: string) {
    try {
      const userRecord = await User.findOne({ where: { email } });
      if (!userRecord) {
        throw new Error("No user found with this email");
      }

      const user = userRecord.get();
      if (user.role === role) {
        const passwordMatch = await comparePassword(password, user.password);
        if (!passwordMatch) {
          throw new Error("Password does not match");
        }

        return {
          status: 200,
          token: await generateToken(user.name),
          data: user,
          message: "Login successful",
        };
      } else {
        return {
          status: 403,
          message: "You're not authorized for this role",
        };
      }
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  }

  async register({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<any> {
    try {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        throw new Error("User already exists with this email");
      }

      const newUser = await User.create({
        name,
        email,
        password: await hashPassword(password),
      });
      return newUser;
    } catch (error) {
      console.error("Error during registration:", error);
      throw error;
    }
  }
}
