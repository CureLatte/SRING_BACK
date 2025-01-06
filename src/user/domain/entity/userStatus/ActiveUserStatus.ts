import User from '../User';
import UserStatus from './UserStatus';
import { BadRequestException } from '@nestjs/common';
import BusinessError from '../../../../common/entity/BusinessError';
import DomainError from '../../../../common/entity/DomainError';

export default class ActiveUserStatus implements UserStatus {
	user: User | null = null;
	status: string = 'Active';

	constructor() {}

	setUser(user: User) {
		this.user = user;
	}

	setStatus(): void {
		if (!this.user) {
			throw new DomainError('유저정보가 없습니다.');
		}

		this.user.status = this;
		this.user.deletedAt = null;
	}
}
