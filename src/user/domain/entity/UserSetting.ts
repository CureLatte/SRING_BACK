import DefaultEntity from '../../../common/entity/DefaultEntity';

export default class UserSetting extends DefaultEntity {
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
