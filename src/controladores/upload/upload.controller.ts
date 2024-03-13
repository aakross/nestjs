import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';//npm i -D @types/multer
import { extname } from 'path';

export const storage = diskStorage(
    {
        destination: "./assets/uploads",
        filename: (req, file, callback) => {
            callback(null, `${Date.now()}${extname(file.originalname)}`);
        }
    }
);

@Controller('upload')
export class UploadController {
    @Post()
    @UseInterceptors(FileInterceptor('file', {storage}))
    metodoPost(@UploadedFile() file) {
        return file;
    }
}
