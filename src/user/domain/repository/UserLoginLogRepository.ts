import UserLoginLog from '../entity/UserLoginLog';

export default interface UserLoginLogRepository {
	save(userLoginUser: UserLoginLog): Promise<UserLoginLog>;
	delete(userLoginUser: UserLoginLog): Promise<void>;
}
