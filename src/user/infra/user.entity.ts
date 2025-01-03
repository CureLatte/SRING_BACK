import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import User from '../domain/entity/User';

@Entity('user')
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number;

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
