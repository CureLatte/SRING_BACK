import User from '../User';

export default interface UserStatus {
	user: User;
	status: string;
	setStatus(): void;
}
