import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module'; // Import the UserModule
import { LogModule } from './log/log.module'; // Import the LogModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '162925', // Your PostgreSQL password
      database: 'user-management', // Database name you created
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Automatically load all entities
      synchronize: true, // Automatically sync entity schema with the database
    }),
    UserModule, // Register UserModule
    LogModule,  // Register LogModule
  ],
})
export class AppModule {}
