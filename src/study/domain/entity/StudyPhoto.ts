import BaseDomain from '../../../common/entity/BaseDomain';

export default class StudyPhoto extends BaseDomain {
	studyId: number;
	sequence: number;
	url: string;

	constructor(data: any) {
		super(data);
		this.studyId = data.studyId;
		this.sequence = data.sequence;
		this.url = data.url;
	}
}
