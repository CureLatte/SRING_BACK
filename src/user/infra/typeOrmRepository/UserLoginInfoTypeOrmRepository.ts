import UserLoginInfo from '../../domain/entity/UserLoginInfo';
import UserLoginInfoRepository from '../../domain/repository/UserLoginInfoRepository';
import { InjectRepository } from '@nestjs/typeorm';
import UserLoginInfoEntity from '../typeOrmEntity/UserLoginInfo.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { RepositoryError } from '../../../common/decorator/RepositoryError';
import BaseTypeOrmRepository from '../../../common/entity/BaseTypeOrmRepository';

@Injectable()
export default class UserLoginInfoTypeOrmRepository
	implements
		UserLoginInfoRepository,
		BaseTypeOrmRepository<UserLoginInfoEntity>
{
	constructor(
		@InjectRepository(UserLoginInfoEntity)
		public repository: Repository<UserLoginInfoEntity>,
	) {}

	@RepositoryError()
	async save(userLoginInfo: UserLoginInfo): Promise<UserLoginInfo> {
		const entity = await this.repository.save(
			UserLoginInfoEntity.fromDomain(userLoginInfo),
		);

		return entity.toDomain();
	}
}
