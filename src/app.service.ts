import { Injectable } from '@nestjs/common';
import { User } from './types';

@Injectable()
export class AppService {
  getUser(): User {
    return {
      id: 1,
      age: 24,
      name: 'Athithyan',
    };
  }
}
