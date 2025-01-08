import UserLoginInfo from '../../domain/entity/UserLoginInfo';
import UserLoginInfoRepository from '../../domain/repository/UserLoginInfoRepository';
import { InjectRepository } from '@nestjs/typeorm';
import UserLoginInfoEntity from '../typeOrmEntity/UserLoginInfo.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserLoginInfoTypeOrmRepository
	implements UserLoginInfoRepository
{
	constructor(
		@InjectRepository(UserLoginInfoEntity)
		private repository: Repository<UserLoginInfoEntity>,
	) {}

	async save(userLoginInfo: UserLoginInfo): Promise<UserLoginInfo> {
		const entity = await this.repository.save(
			UserLoginInfoEntity.fromDomain(userLoginInfo),
		);

		return entity.toDomain();
	}
}
