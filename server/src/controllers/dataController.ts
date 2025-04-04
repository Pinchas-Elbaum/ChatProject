import { Request, Response } from "express";
import User from "../models/UserModel";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find({}, 'id name imageBase64'); 
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
      }
};