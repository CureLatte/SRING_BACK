import BaseDomain from '../../../common/entity/BaseDomain';

export default class StudyMemberRole extends BaseDomain {
	name: string;
	allowYn: boolean;

	constructor(data: any) {
		super(data);
	}
}
