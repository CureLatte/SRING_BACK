import User from '../User';
import UserStatus from './UserStatus';

export default class LoginUserStatus implements UserStatus {
	name: string;
	login(user: User): void {}
}
