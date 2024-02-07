import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from 'express';
import { Model } from 'mongoose';
import { User } from 'src/Model/User';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async SignUp(res: Response, body: { name: string }) {
    const data = await this.userModel.create({
      email: 'muhfikri@gmail.com',
      fullName: 'Muhammad Fikri',
      password: 'aselole123',
    });
    res.json({ message: 'Success', data });
  }

  async GetUser(res: Response) {
    const data = await this.userModel.find();

    res.json({ data });
  }
}
