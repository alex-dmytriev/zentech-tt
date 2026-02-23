import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto: RegisterDto) {
    const exists = await this.prisma.user.findUnique({
      where: { email: dto.email },
      select: { id: true },
    });

    if (exists) throw new ConflictException('Email already in use');

    const passwordHash = await bcrypt.hash(dto.password, 10);

    // Safe user object return (no sensictive data)
    const user = await this.prisma.user.create({
      data: { email: dto.email, password: passwordHash },
      select: { id: true, email: true, createdAt: true },
    });

    return user;
  }
}
