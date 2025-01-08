import StudyMemberRole from '../entity/StudyMemberRole';

export default interface StudyMemberRoleRepository {
	save(studyRole: StudyMemberRole): Promise<StudyMemberRole>;
}
