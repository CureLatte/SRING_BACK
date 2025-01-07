import UserLoginLog from '../domain/entity/UserLoginLog';
import UserLoginLogRepository from '../domain/repository/UserLoginLogRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserLoginLogEntity from './UserLoginLog.entity';

@Injectable()
export default class UserLoginLogTypeOrmRepository
	implements UserLoginLogRepository
{
	constructor(
		@InjectRepository(UserLoginLogEntity)
		private repository: Repository<UserLoginLogEntity>,
	) {}
	async save(userLoginUser: UserLoginLog): Promise<UserLoginLog> {
		throw new Error('Method not implemented.');
	}
	async delete(userLoginUser: UserLoginLog): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
