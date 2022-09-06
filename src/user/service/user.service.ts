import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  
  constructor(@InjectRepository(User) private userRepository: Repository<User>){};

  async create(createUserDto: CreateUserDto):Promise<CreateUserDto> {
    return  await this.userRepository.save(createUserDto);
  }

  async findByEmail(email: string): Promise<User>{
    return await this.userRepository.findOneBy({email});
  }

 async findAll():Promise<User[]> {
    return await this.userRepository.find();
  }
}
