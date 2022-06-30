import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class QuestionAPIService {

	private _apiLink = 'http://jservice.io/api/random';

	private _questions = [
		{
			title: 'Title One',
			answer: 'Answer One'
		},
		{
			title: 'Title Two',
			answer: 'Answer Two'
		},
		{
			title: 'Title Three',
			answer: 'Answer Three'
		},
		{
			title: 'Title Four',
			answer: 'Answer Four'
		}
	];

	constructor(private _http: HttpClient) { }

	public getQuestions(count: number) {
		return this._http.get(this._apiLink + '?count=' + count);
	}

	
}
