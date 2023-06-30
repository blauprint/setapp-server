import { Module } from '@nestjs/common';
import { ClerkAuthGuard } from './guard/index';

@Module({
  providers: [ClerkAuthGuard],
  exports: [ClerkAuthGuard],
})
export class ClerkModule {}
