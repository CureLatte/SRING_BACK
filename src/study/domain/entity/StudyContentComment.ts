import BaseDomain from '../../../common/entity/BaseDomain';

export default class StudyContentComment extends BaseDomain {
	memberId: number;
	contentId: number;
	comment: string;

	constructor(data: any) {
		super(data);
		this.memberId = data.memberId;
		this.contentId = data.contentId;
		this.comment = data.comment;
	}
}
