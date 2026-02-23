import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DealsModule } from './deals/deals.module';

@Module({
  imports: [PrismaModule, DealsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
