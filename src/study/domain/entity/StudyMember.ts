import BaseDomain from '../../../common/entity/BaseDomain';
import User from '../../../user/domain/entity/User';
import Study from './Study';

export default class StudyMember extends BaseDomain {
	studyId: number;
	userId: number;
	roleId: number;

	constructor(data: any) {
		super(data);
		this.studyId = data.studyId;
		this.userId = data.userId;
		this.roleId = data.roleId;
	}
}
