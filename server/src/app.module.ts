import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import {MongooseModule} from "@nestjs/mongoose";
import { FileModule } from './file/file.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'

@Module({
  controllers: [],
  providers: [],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    TrackModule,
    MongooseModule.forRoot('mongodb://localhost:27017/audio-platform'),
    FileModule
  ]
})
export class AppModule {}
