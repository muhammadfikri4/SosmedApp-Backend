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
        uri: 'mongodb://mongo:eCb-fEEBe5DAFCdBA2BhhcA3FDaA5--4@monorail.proxy.rlwy.net:51515',
        user: 'mongo',
        pass: 'eCb-fEEBe5DAFCdBA2BhhcA3FDaA5--4',
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
