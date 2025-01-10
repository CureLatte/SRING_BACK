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
import { Inject } from '@nestjs/common';

export default class KaKaoLoginPlatform implements LoginPlatform {
	name: string = 'KAKAO';
	api: KakaoAPI;
	logger = new MyLogger('KaKaoLoginPlatform');

	constructor(api: KakaoAPI) {
		this.api = api;
	}

	async getTokenInfo(data: any): Promise<LoginToken> {
		const code = data.payload.code;

		this.logger.log(`inputData: ${JSON.stringify(data, null, ' ')}`);

		console.log(this.api);

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
