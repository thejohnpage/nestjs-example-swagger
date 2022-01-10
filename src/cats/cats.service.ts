import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: CreateCatDto): Cat {
    this.cats.push(cat);
    return cat;
  }

  update(id: number, catUpdate: CreateCatDto): Cat {
    const cat = this.cats[id];
    if(!!catUpdate.age) {
      cat.age = catUpdate.age
    }
    if(!!catUpdate.breed) {
      cat.breed = catUpdate.breed;
    }
    if(!!catUpdate.name) {
      cat.name = catUpdate.name;
    }
    this.cats[id] = cat;
    return cat;
  }

  delete(id: number): Cat {
    const cat = this.cats[id];
    delete this.cats[id];
    return cat;
  }

  findOne(id: number): Cat {
    return this.cats[id];
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
