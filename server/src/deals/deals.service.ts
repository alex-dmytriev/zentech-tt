import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DealsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.deal.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}
