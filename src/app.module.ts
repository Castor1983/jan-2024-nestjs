import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UsersModule, HealthModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
