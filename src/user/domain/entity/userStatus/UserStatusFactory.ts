import ActiveUserStatus from './ActiveUserStatus';
import User from '../User';
import DeactivateUserStatus from './DeactivateUserStatus';
import UserStatus from './UserStatus';
import DomainError from '../../../../common/entity/DomainError';

export default class UserStatusFactory {
	constructor() {}

	public static getUserStatus(statusName: string): UserStatus {
		if (statusName === 'ACTIVATE') {
			return new ActiveUserStatus();
		} else if (statusName === 'DEACTIVATE') {
			return new DeactivateUserStatus();
		} else {
			// default: activate
			return new ActiveUserStatus();
		}
	}
}
