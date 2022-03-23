import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 0,
      name: 'Boat',
    },
    {
      id: 1,
      name: 'Barry',
    },
    {
      id: 2,
      name: 'Beam',
    },
  ];

  getUsers(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }

    return this.users;
  }

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };

    this.users.push(newUser);

    return newUser;
  }
}
