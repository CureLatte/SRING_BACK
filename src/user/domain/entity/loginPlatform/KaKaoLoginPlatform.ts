import UserLoginInfo from '../UserLoginInfo';
import LoginPlatform from './LoginPlatform';
import { Inject } from '@nestjs/common';
import KakaoAPI from '../../repository/KakaoAPI';
import KaKaoAPIImpl from '../../../infra/api/KaKaoAPIImpl';
import User from '../User';
import { MyLogger } from '../../../../common/Logger';

export default class KaKaoLoginPlatform implements LoginPlatform {
	name: string = 'KAKAO';
	api: KakaoAPI = new KaKaoAPIImpl();
	logger = new MyLogger('KaKaoLoginPlatform');

	async getTokenInfo(data: any): Promise<UserLoginInfo> {
		const code = data.payload.code;

		this.logger.log(`inputData: ${JSON.stringify(data, null, ' ')}`);

		const tokenInfo = await this.api.getAccessToken(code);

		this.logger.log(`tokenInfo: ${JSON.stringify(tokenInfo, null, ' ')}`);

		return new UserLoginInfo({
			accessToken: tokenInfo.access_token,
			platform: this.name,
		});
	}

	async getUserInfo(data: UserLoginInfo): Promise<User> {
		const accessToken = data.accessToken;

		const userInfo = await this.api.getUserInfo(accessToken);

		this.logger.log(`userInfo: ${JSON.stringify(userInfo, null, ' ')}`);

		return new User({
			profile: userInfo.kakao_account.profile.profile_image_url,
			name: userInfo.kakao_account.profile.nickname,
		});
	}
}
