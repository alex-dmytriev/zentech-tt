import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApplicationsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateApplicationDto) {
    return this.prisma.application.create({
      data: {
        name: dto.name,
        email: dto.email,
        message: dto.message,
        dealId: dto.dealId ?? null,
      },
    });
  }

  // for testing
  async findAll() {
    return this.prisma.application.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}
