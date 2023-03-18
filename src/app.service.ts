import { Injectable } from '@nestjs/common';
import { Note, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async getNotes() {
    return prisma.note.findMany();
  }

  async createNote(note: Note) {
    return prisma.note.create({ data: note });
  }
}
