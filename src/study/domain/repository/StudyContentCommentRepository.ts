import StudyContentComment from '../entity/StudyContentComment';

export default interface StudyContentCommentRepository {
	save(
		studyContentComment: StudyContentComment,
	): Promise<StudyContentComment>;
}
