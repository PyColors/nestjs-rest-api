import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// global-scoped
@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // Any module that imports the CatsModule has access to the CatsService
  exports: [CatsService],
})
export class CatsModule {}
