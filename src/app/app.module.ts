import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { QuestionsComponent } from './main/questions/questions.component';
import { QuestionAPIService } from './question-api.service';
import { AnswerComponent } from './main/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    QuestionsComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [QuestionAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
