import { KakaoTokenInfoResponse, KaKaoUserInfoResponse } from '../dto/KakaoDto';

export default interface KakaoAPI {
	getAccessToken(code: string): Promise<KakaoTokenInfoResponse>;
	getUserInfo(accessToken: string): Promise<KaKaoUserInfoResponse>;
}
