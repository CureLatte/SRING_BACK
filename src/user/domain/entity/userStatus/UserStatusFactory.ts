import ActiveUserStatus from './ActiveUserStatus';
import User from '../User';
import DeactivateUserStatus from './DeactivateUserStatus';
import UserStatus from './UserStatus';
import LoginUserStatus from './LoginUserStatus';

export default class UserStatusFactory {
	constructor() {}

	public static getUserStatus(statusName: string): UserStatus {
		const statusList: UserStatus[] = [
			new ActiveUserStatus(),
			new DeactivateUserStatus(),
			new LoginUserStatus(),
		];

		for (const userStatus of statusList) {
			if (statusName === userStatus.name) {
				return userStatus;
			}
		}

		return statusList[0];
	}
}
