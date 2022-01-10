import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';

@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post('/')
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }
  @Put('/:id')
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.update(+id, updateCatDto);
  }
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Cat,
  })
  findOne(@Param('id') id: string): Cat {
    return this.catsService.findOne(+id);
  }

  @Get('/')
  @ApiResponse({
    status: 200,
    description: 'List of Cats',
    type: Cat
  })
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    description: 'Delete a Cat record',
    type: Cat
  })
  delete(@Param('id') id: string): Cat {
    return this.catsService.delete(+id);
  }
}
