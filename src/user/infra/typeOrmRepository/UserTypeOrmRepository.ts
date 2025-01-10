import UserRepository from '../../domain/repository/UserRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../typeOrmEntity/User.entity';
import { Repository } from 'typeorm';
import User from '../../domain/entity/User';
import { applyDecorators, Injectable } from '@nestjs/common';
import { RepositoryError } from '../../../common/decorator/RepositoryError';
import BaseTypeOrmRepository from '../../../common/entity/BaseTypeOrmRepository';

@Injectable()
export default class UserTypeOrmRepository
	implements UserRepository, BaseTypeOrmRepository<UserEntity>
{
	constructor(
		@InjectRepository(UserEntity)
		public repository: Repository<UserEntity>,
	) {}

	@RepositoryError()
	async create(): Promise<User> {
		const entity = await this.repository.save(new UserEntity());

		console.log('eneity: ', entity);

		return entity.toDomain();
	}

	@RepositoryError()
	async save(user: User): Promise<User> {
		const entity = UserEntity.fromDomain(user);
		const userEntity = await this.repository.save(entity);
		return userEntity.toDomain();
	}

	@RepositoryError()
	async delete(user: User): Promise<void> {
		const entity = UserEntity.fromDomain(user);
		await this.repository.save(entity);
		// await this.typeOrmRepository.delete(typeOrmEntity.id);
		return;
	}

	@RepositoryError()
	async finAll(): Promise<User[]> {
		const userList: UserEntity[] = await this.repository.find();

		return userList.map((data) => {
			return data.toDomain();
		});
	}
}
