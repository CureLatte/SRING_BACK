import User from '../User';

export default interface UserStatus {
	name: string;
	login(user: User): void;
}
