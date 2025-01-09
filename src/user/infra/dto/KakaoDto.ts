export type KakaoTokenInfoResponse = {
	token_type: string;
	access_token: string;
	refresh_token: string;
	expires_in: number;
};

export type KaKaoUserInfoResponse = {
	kakao_account: {
		profile: {
			nickname: string;
			thumbnail_image_url: string;
			profile_image_url: string;
		};
		name: string;
	};
};
