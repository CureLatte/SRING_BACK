import ActiveUserStatus from './ActiveUserStatus';
import User from '../User';

export default class UserStatusFactory {
	constructor() {}

	public static getUserStatus(statusName: string) {
		if (statusName === '') {
			return new ActiveUserStatus();
		}
	}
}
