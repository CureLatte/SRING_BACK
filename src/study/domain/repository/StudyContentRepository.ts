import StudyContent from '../entity/StudyContent';

export default interface StudyContentRepository {
	save(studyContent: StudyContent): Promise<StudyContent>;
}
