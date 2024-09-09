
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // Import InjectRepository
import { Repository } from 'typeorm'; // Import TypeORM Repository
import { User } from './user.entity'; // Import the User entity
import { LogService } from '../log/log.service'; // Import the LogService
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) // Inject the UserRepository
    private readonly userRepo: Repository<User>, // Use TypeORM Repository for User
    private readonly logService: LogService, // Inject LogService for logging
  ) {}

  async createUser(data: CreateUserDto) {
    const user = this.userRepo.create(data); // Use the repository to create a user
    await this.userRepo.save(user); // Save the user
    await this.logService.logAction('Create User', `User ${user.email} created`);
    return user;
  }

  async updateUser(id: number, data: UpdateUserDto) {
    await this.userRepo.update(id, data); // Update the user by ID
    const user = await this.userRepo.findOneBy({ id });
    await this.logService.logAction('Update User', `User ${user.email} updated`);
    return user;
  }

  async deleteUser(id: number) {
    const user = await this.userRepo.findOneBy({ id });
    await this.userRepo.delete(id); // Delete the user by ID
    await this.logService.logAction('Delete User', `User ${user.email} deleted`);
    return user;
  }
}

