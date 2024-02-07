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
        uri: 'mongodb://mongo:DG3fHh-H45d4gCAcdcHB6Bh2aCH2AhbG@monorail.proxy.rlwy.net:57132',
        user: 'mongo',
        pass: 'DG3fHh-H45d4gCAcdcHB6Bh2aCH2AhbG',
        dbName: 'test',
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
