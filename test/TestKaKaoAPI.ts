import {
	KakaoTokenInfoResponse,
	KaKaoUserInfoResponse,
} from 'src/user/infra/dto/KakaoDto';
import KakaoAPI from '../src/user/domain/repository/KakaoAPI';

export default class TestKaKaoAPI implements KakaoAPI {
	async getAccessToken(code: string): Promise<KakaoTokenInfoResponse> {
		console.log('testCODE!!');

		return {
			token_type: 'code',
			access_token: 'efe',
			refresh_token: 'efe',
			expires_in: 3,
		};
	}
	async getUserInfo(accessToken: string): Promise<KaKaoUserInfoResponse> {
		return {
			kakao_account: {
				name: '',
				profile: {
					nickname: '',
					profile_image_url: '',
					thumbnail_image_url: '',
				},
			},
		};
	}
}
