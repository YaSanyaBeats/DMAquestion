import { TestBed } from '@angular/core/testing';

import { QuestionAPIService } from './question-api.service';

describe('QuestionAPIService', () => {
	let service: QuestionAPIService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(QuestionAPIService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
