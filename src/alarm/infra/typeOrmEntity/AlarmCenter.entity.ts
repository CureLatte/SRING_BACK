import { Column, Entity } from 'typeorm';
import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';
import AlarmCenter from '../../domain/entity/AlarmCenter';
import { defaultOutDir } from '@nestjs/cli/lib/configuration/defaults';

@Entity('alarm_center')
export default class AlarmCenterEntity extends TypeOrmBaseEntity {
	@Column()
	userId: number;

	@Column()
	content: string;

	@Column()
	location: string;

	@Column()
	readYn: boolean;

	toDomain(): AlarmCenter {
		return new AlarmCenter({
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			deletedAt: this.deletedAt,
			userId: this.userId,
			content: this.content,
			location: this.location,
			readYn: this.readYn,
		});
	}

	static fromDomain(domain: AlarmCenter): AlarmCenterEntity {
		const entity = new AlarmCenterEntity();

		entity.id = domain.id;
		entity.createdAt = domain.createdAt;
		entity.updatedAt = domain.updatedAt;
		entity.deletedAt = domain.deletedAt;

		entity.userId = domain.userId;
		entity.content = domain.content;
		entity.location = domain.location;
		entity.readYn = domain.readYn;

		return entity;
	}
}
