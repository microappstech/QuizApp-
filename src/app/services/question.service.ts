import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpclient:HttpClient) { }

  getQuestions(){
    return this.httpclient.get<any>('assets/question.json');
  }
}
