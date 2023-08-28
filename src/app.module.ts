import { Module } from '@nestjs/common';
import { UrlModule } from './url/url.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/urlshortner'),
    UrlModule,
  ],
})
export class AppModule {}