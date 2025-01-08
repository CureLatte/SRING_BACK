import BaseDomain from '../../../common/entity/BaseDomain';

export default class StudyContent extends BaseDomain {
	studyId: number;
	memberId: number;
	title: string;
	type: string;
	fixYn: boolean;
	publicYn: boolean;

	constructor(data: any) {
		super(data);
		this.studyId = data.studyId;
		this.memberId = data.memberId;
		this.title = data.title;
		this.type = data.type;
		this.fixYn = data.fixYn;
		this.publicYn = data.publicYn;
	}
}
