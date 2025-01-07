import UserLoginInfo from '../../domain/entity/UserLoginInfo';
import UserLoginInfoRepository from '../../domain/repository/UserLoginInfoRepository';
import { InjectRepository } from '@nestjs/typeorm';
import UserLoginInfoEntity from '../typeOrmEntity/UserLoginInfo.entity';
import { Repository } from 'typeorm';

export default class UserLoginInfoTypeOrmRepository
	implements UserLoginInfoRepository
{
	constructor(
		@InjectRepository(UserLoginInfoEntity)
		repository: Repository<UserLoginInfoEntity>,
	) {}

	save(userLoginInfo: UserLoginInfo): Promise<UserLoginInfo> {
		throw new Error('Method not implemented.');
	}
}
