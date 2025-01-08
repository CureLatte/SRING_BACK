import StudyPhotoRepository from '../../domain/repository/StudyPhotoRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import StudyPhotoEntity from '../typeOrmEntity/StudyPhoto.entity';
import { Repository } from 'typeorm';

@Injectable()
export default class StudyPhotoTypeOrmRepository
	implements StudyPhotoRepository
{
	constructor(
		@InjectRepository(StudyPhotoEntity)
		private respository: Repository<StudyPhotoEntity>,
	) {}
}
