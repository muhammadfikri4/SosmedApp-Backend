import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  SignUp(@Res() res: Response, @Body() body: { name: string }) {
    return this.userService.SignUp(res, body);
  }

  @Get('/getuser')
  GetUser(@Res() res: Response) {
    return this.userService.GetUser(res);
  }
}
