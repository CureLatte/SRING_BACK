export default class BaseDomain {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;

	constructor(data: any) {
		this.id = data.id ?? 0;
		this.createdAt = data.createdAt;
		this.updatedAt = data.updatedAt;
		this.deletedAt = data.deletedAt;
	}
}
