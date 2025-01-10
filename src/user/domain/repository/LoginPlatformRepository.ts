import LoginPlatform from '../entity/loginPlatform/LoginPlatform';

export default interface LoginPlatformRepository {
	getLoginPlatform(platform: string): Promise<LoginPlatform>;
}
