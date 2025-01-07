import UserLoginLog from '../domain/entity/UserLoginLog';
import UserLoginLogRepository from '../domain/repository/UserLoginLogRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserLoginLogTypeOrmRepository
	implements UserLoginLogRepository
{
	async save(userLoginUser: UserLoginLog): Promise<UserLoginLog> {
		throw new Error('Method not implemented.');
	}
	async delete(userLoginUser: UserLoginLog): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
