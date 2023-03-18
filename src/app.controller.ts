import { Body, Controller, Get, Post } from '@nestjs/common';
import { Note } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNotes() {
    return this.appService.getNotes();
  }

  @Post()
  createNote(@Body() note: Note) {
    return this.appService.createNote(note);
  }
}
