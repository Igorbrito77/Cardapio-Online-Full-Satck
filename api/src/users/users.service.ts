import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {

    return this.userRepository.find();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async edit(id: number, userDto: CreateUserDto){


    await this.userRepository
        .createQueryBuilder()
        .update(User)
        .set({ 
                nome: userDto.nome,
                email: userDto.email,
        })
        .where('id = :id', { id})
        .execute();

  }

  async login(loginDto: LoginDto): Promise<User> {

    const user = await this.userRepository.findOne({
      where: {
        email: loginDto.email,
        senha: loginDto.senha,
      },
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }
    
    return user;
  
  }


}
