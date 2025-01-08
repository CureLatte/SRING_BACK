export default interface KakaoAPI {
	getAccessToken(code: string): Promise<any>;
	getUserInfo(accessToken: string): Promise<any>;
}
