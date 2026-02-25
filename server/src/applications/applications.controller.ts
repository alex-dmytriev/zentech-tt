import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';

@Controller('applications')
export class ApplicationsController {
  constructor(private apps: ApplicationsService) {}

  @Post()
  async create(@Body() dto: CreateApplicationDto) {
    return this.apps.create(dto);
  }

  //for testing
  @Get()
  async findAll() {
    return this.apps.findAll();
  }
}
