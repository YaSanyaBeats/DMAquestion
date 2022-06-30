import { Component, OnInit } from '@angular/core';
import { YesnoAPIService } from '../yesno-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  constructor(private _yesnoService: YesnoAPIService) { }

  public isStart = false;
  public isAnswered = false;
  public answerObj:any;

  public openAnswer(event:any){
    this.isAnswered = true;
    this._yesnoService.getAnswer(event).subscribe((answerObj) => this.answerObj = answerObj);
  }

  ngOnInit(): void {
  }

}
