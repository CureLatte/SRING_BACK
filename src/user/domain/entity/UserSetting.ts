import BaseDomain from '../../../common/entity/BaseDomain';

export default class UserSetting extends BaseDomain {
	userId: number;
	alarmYn: boolean;

	constructor(data: any) {
		super(data);
		this.userId = data.userId;
		this.alarmYn = data.alarmYn;
	}

	alarmToggle() {
		this.alarmYn = !this.alarmYn;
	}
}
