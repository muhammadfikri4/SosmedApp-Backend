import { Module } from '@nestjs/common';
import {
  MongooseModule,
  MongooseModuleOptions,
  Schema,
} from '@nestjs/mongoose';
import { User, UserModel } from './Model/User';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService,
      ): Promise<MongooseModuleOptions> => ({
        uri: 'mongodb+srv://muhfikz04:muhfikz04@cluster0.won67pc.mongodb.net/',
        user: 'muhfikz04',
        pass: 'muhfikz',
        dbName: 'TwitterClone',
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          return UserModel;
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
