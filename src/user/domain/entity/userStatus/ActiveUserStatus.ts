import User from '../User';
import UserStatus from './UserStatus';
import { BadRequestException } from '@nestjs/common';
import BusinessError from '../../../../common/entity/BusinessError';
import DomainError from '../../../../common/entity/DomainError';

export default class ActiveUserStatus implements UserStatus {
	name: string = 'Active';

	constructor() {}
	setStatus(user: User): void {}
}
