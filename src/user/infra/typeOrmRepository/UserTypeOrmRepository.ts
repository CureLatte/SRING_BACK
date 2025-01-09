import UserRepository from '../../domain/repository/UserRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../typeOrmEntity/User.entity';
import { Repository } from 'typeorm';
import User from '../../domain/entity/User';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserTypeOrmRepository implements UserRepository {
	constructor(
		@InjectRepository(UserEntity)
		private repository: Repository<UserEntity>,
	) {}

	async create(): Promise<User> {
		const entity = await this.repository.save(new UserEntity());

		return entity.toDomain();
	}

	async save(user: User): Promise<User> {
		const entity = UserEntity.fromDomain(user);
		const userEntity = await this.repository.save(entity);
		return userEntity.toDomain();
	}
	async delete(user: User): Promise<void> {
		const entity = UserEntity.fromDomain(user);
		await this.repository.save(entity);
		// await this.typeOrmRepository.delete(typeOrmEntity.id);
		return;
	}

	async finAll(): Promise<User[]> {
		const userList: UserEntity[] = await this.repository.find();

		return userList.map((data) => {
			return data.toDomain();
		});
	}
}
