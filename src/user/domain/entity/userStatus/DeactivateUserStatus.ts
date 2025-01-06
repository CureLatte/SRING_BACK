import User from '../User';
import UserStatus from './UserStatus';

export default class DeactivateUserStatus implements UserStatus {
	name: string = 'DEACTIVATE';
	setStatus(user: User): void {
		user.deletedAt = new Date();
	}
}
