import TypeOrmBaseEntity from '../../common/entity/TypeOrmBaseEntity';
import { Column, Entity } from 'typeorm';

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
}
