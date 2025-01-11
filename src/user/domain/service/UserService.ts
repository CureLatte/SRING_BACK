import User from '../entity/User';

export default interface UserService {
	get(userId: number): Promise<User>;
	signup(userInfo: any): Promise<User>;
	login(user: User): Promise<User>;
	logout(user: User): Promise<User>;
	update(user: User): Promise<User>;
	withdraw(user: User): Promise<void>;
}
