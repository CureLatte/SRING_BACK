import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import User from '../../domain/entity/User';
import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';

@Entity('user')
export class UserEntity extends TypeOrmBaseEntity {
	@Column()
	name: string;
	profile: string;
	status: string;

	toDomain(): User {
		return new User({
			id: this.id,
			name: this.name,
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
		entity.profile = domain.profile;
		entity.status = domain.status.name;
		entity.createdAt = domain.createdAt;
		entity.updatedAt = domain.updatedAt;
		entity.deletedAt = domain.deletedAt;

		return entity;
	}
}
