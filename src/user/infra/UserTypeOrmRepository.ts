import UserRepository from '../domain/repository/UserRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import User from '../domain/entity/User';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserTypeOrmRepository implements UserRepository {
	constructor(
		@InjectRepository(UserEntity)
		private repository: Repository<UserEntity>,
	) {}

	async finAll(): Promise<User[]> {
		const userList: UserEntity[] = await this.repository.find();

		return userList.map((data) => {
			return data.toDomain();
		});
	}
}
