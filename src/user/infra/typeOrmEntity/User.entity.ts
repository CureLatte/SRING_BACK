import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import User from '../../domain/entity/User';
import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';
import ActiveUserStatus from '../../domain/entity/userStatus/ActiveUserStatus';

@Entity('user')
export class UserEntity extends TypeOrmBaseEntity {
	@Column({
		nullable: true,
	})
	name: string;

	@Column({
		nullable: true,
	})
	nickName: string;

	@Column({
		nullable: true,
	})
	profile: string;

	@Column({
		default: ActiveUserStatus.name,
	})
	status: string;

	toDomain(): User {
		return new User({
			id: this.id,
			name: this.name,
			nickName: this.nickName,
			status: this.status,
			profile: this.profile,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			deletedAt: this.deletedAt,
		});
	}

	static fromDomain(domain: User): UserEntity {
		const entity = new UserEntity();

		entity.id = domain.id;
		entity.name = domain.name;
		entity.nickName = domain.nickName;
		entity.profile = domain.profile;
		entity.status = domain.status.name;
		entity.createdAt = domain.createdAt;
		entity.updatedAt = domain.updatedAt;
		entity.deletedAt = domain.deletedAt;

		return entity;
	}
}
