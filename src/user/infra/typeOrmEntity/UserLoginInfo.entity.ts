import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';
import { Column, Entity } from 'typeorm';
import UserLoginInfo from '../../domain/entity/UserLoginInfo';

@Entity()
export default class UserLoginInfoEntity extends TypeOrmBaseEntity {
	@Column()
	userId: number;

	@Column()
	platform: string;

	@Column()
	accessToken: string;

	toDomain(): UserLoginInfo {
		return new UserLoginInfo({
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			deletedAt: this.deletedAt,
			userId: this.userId,
			platform: this.platform,
			accessToken: this.accessToken,
		});
	}

	static fromDomain(domain: UserLoginInfo): UserLoginInfoEntity {
		const entity = new UserLoginInfoEntity();
		entity.id = domain.id;
		entity.createdAt = domain.createdAt;
		entity.updatedAt = domain.updatedAt;
		entity.deletedAt = domain.deletedAt;

		entity.accessToken = domain.accessToken;
		entity.userId = domain.userId;
		entity.platform = domain.platform.name;

		return entity;
	}
}
