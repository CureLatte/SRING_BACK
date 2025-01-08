import User from '../entity/User';

export default interface UserService {
	signup(userInfo: any): Promise<User>;
	login(user: User): Promise<User>;
	update(user: User): Promise<User>;
	withdraw(user: User): Promise<void>;
}
