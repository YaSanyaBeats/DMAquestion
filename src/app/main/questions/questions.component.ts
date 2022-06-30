import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuestionAPIService } from 'src/app/question-api.service';
import { YesnoAPIService } from 'src/app/yesno-api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @Output() answer = new EventEmitter();

  public questions: any;
  private _rightAnswerIndex = this.getRandom();

  public getRandom(){
    return Math.floor(Math.random() * 4);
  }

  public getRightIndex(){
    return this._rightAnswerIndex;
  }

  public checkAnswer(answer: string){
    let condition = answer == this.questions[this._rightAnswerIndex].answer;
    this.answer.emit(condition);
  }


  constructor(private _questionsService: QuestionAPIService) {

  }

  ngOnInit(): void {
    this._questionsService.getQuestions(4).subscribe((questions) => {
      this.questions = questions;
    }); 
  }

}
