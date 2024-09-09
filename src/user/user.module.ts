import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity'; // Import the User entity
import { UserService } from './user.service'; // Import the UserService
import { UserController } from './user.controller'; // Import the UserController
import { LogModule } from '../log/log.module'; // Import the LogModule for logging
import { LogService } from '../log/log.service'; // Import the LogService

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Make User entity available via TypeOrmModule
    LogModule, // Ensure LogModule is imported
  ],
  providers: [UserService], // Register UserService as a provider
  controllers: [UserController], // Register UserController
  exports: [UserService], // Export UserService if needed in other modules
})
export class UserModule {}
