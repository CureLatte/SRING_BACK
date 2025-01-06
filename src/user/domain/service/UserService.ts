import User from '../entity/User';

export default interface UserService {
	signup(userInfo: any): Promise<User>;
}
