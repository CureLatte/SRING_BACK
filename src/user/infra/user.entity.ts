import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import User from '../domain/entity/User';
import TypeOrmBaseEntity from '../../common/entity/TypeOrmBaseEntity';

@Entity('user')
export class UserEntity extends TypeOrmBaseEntity {
	@Column()
	name: string;

	toDomain(): User {
		return new User({
			id: this.id,
			name: this.name,
		});
	}

	static fromDomain(user: User): UserEntity {
		const entity = new UserEntity();

		entity.id = user.id;
		entity.name = user.name;

		return entity;
	}
}
