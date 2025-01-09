import UserLoginInfo from '../UserLoginInfo';
import LoginPlatform from './LoginPlatform';
import KakaoAPI from '../../repository/KakaoAPI';
import KaKaoAPIImpl from '../../../infra/api/KaKaoAPIImpl';
import User from '../User';
import { MyLogger } from '../../../../common/Logger';
import { LoginToken, UserProfileInfo } from '../../dto/UserDto';
import {
	KakaoTokenInfoResponse,
	KaKaoUserInfoResponse,
} from '../../../infra/dto/KakaoDto';

export default class KaKaoLoginPlatform implements LoginPlatform {
	name: string = 'KAKAO';
	api: KakaoAPI = new KaKaoAPIImpl();
	logger = new MyLogger('KaKaoLoginPlatform');

	async getTokenInfo(data: any): Promise<LoginToken> {
		const code = data.payload.code;

		this.logger.log(`inputData: ${JSON.stringify(data, null, ' ')}`);

		const tokenInfo: KakaoTokenInfoResponse =
			await this.api.getAccessToken(code);

		this.logger.log(`tokenInfo: ${JSON.stringify(tokenInfo, null, ' ')}`);

		return {
			accessToken: tokenInfo.access_token,
			refreshToken: tokenInfo.refresh_token,
		};
	}

	async getUserInfo(data: LoginToken): Promise<UserProfileInfo> {
		const accessToken = data.accessToken;

		const userInfo: KaKaoUserInfoResponse =
			await this.api.getUserInfo(accessToken);

		this.logger.log(`userInfo: ${JSON.stringify(userInfo, null, ' ')}`);

		return {
			profile: userInfo.kakao_account.profile.nickname,
			name: userInfo.kakao_account.name,
			nickName: userInfo.kakao_account.profile.nickname,
		};
	}
}
