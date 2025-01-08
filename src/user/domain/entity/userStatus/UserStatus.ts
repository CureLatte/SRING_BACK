import User from '../User';

export default interface UserStatus {
	name: string;
	setStatus(user: User): void;
}
