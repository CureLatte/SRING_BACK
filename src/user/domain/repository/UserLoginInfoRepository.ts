import UserLoginInfo from '../entity/UserLoginInfo';

export default interface UserLoginInfoRepository {
	save(userLoginInfo: UserLoginInfo): Promise<UserLoginInfo>;
}
