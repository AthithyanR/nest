import { Controller, Get, Res } from '@nestjs/common';
import { createReadStream } from 'fs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(@Res() res) {
    res.send(createReadStream(__filename));
  }
}
