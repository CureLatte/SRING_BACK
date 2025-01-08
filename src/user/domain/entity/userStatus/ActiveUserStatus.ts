import User from '../User';
import UserStatus from './UserStatus';

export default class ActiveUserStatus implements UserStatus {
	name: string = 'Active';

	constructor() {}
	setStatus(user: User): void {}
}
