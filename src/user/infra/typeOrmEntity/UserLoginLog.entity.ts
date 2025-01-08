import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';
import { Column, Entity } from 'typeorm';
import UserLoginLog from '../../domain/entity/UserLoginLog';

@Entity('user_login_log')
export default class UserLoginLogEntity extends TypeOrmBaseEntity {
	@Column({
		name: 'user_id',
	})
	userId: number;

	@Column({
		name: 'status',
	})
	status: string;

	toDomain(): any {
		return new UserLoginLog({
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			deletedAt: this.deletedAt,
			userId: this.userId,
			status: this.status,
		});
	}

	static fromDomain(domain: UserLoginLog): UserLoginLogEntity {
		const entity = new UserLoginLogEntity();

		entity.id = domain.id;
		entity.userId = domain.userId;
		entity.status = domain.status;
		entity.createdAt = domain.createdAt;
		entity.updatedAt = domain.updatedAt;
		entity.deletedAt = domain.deletedAt;

		return entity;
	}
}
