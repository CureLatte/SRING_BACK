import UserLoginLog from '../../domain/entity/UserLoginLog';
import UserLoginLogRepository from '../../domain/repository/UserLoginLogRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserLoginLogEntity from '../typeOrmEntity/UserLoginLog.entity';
import BaseTypeOrmRepository from '../../../common/entity/BaseTypeOrmRepository';

@Injectable()
export default class UserLoginLogTypeOrmRepository
	implements UserLoginLogRepository, BaseTypeOrmRepository<UserLoginLogEntity>
{
	constructor(
		@InjectRepository(UserLoginLogEntity)
		public repository: Repository<UserLoginLogEntity>,
	) {}
	async save(userLoginUser: UserLoginLog): Promise<UserLoginLog> {
		const entity = await this.repository.save(
			UserLoginLogEntity.fromDomain(userLoginUser),
		);
		return entity.toDomain();
	}
	async delete(userLoginUser: UserLoginLog): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
