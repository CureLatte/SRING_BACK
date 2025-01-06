import User from '../entity/User';

export default interface UserService {
	create(userInfo: any): User;
}
