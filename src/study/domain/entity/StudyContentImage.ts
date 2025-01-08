import BaseDomain from '../../../common/entity/BaseDomain';

export default class StudyContentImage extends BaseDomain {
	contentId: number;
	url: string;
	sequence: number;

	constructor(data: any) {
		super(data);

		this.url = data.url;
		this.sequence = data.sequence;
	}
}
