import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import {interval} from 'rxjs';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{
  constructor(private _questionService:QuestionService){}
  public name:any
  public questionList:any
  public currentQuestion : number=0;
  public points : number =0;
  nbrQuestions =0
  time=60;
  correctAnswer=0; wrongAnswer=0;
  interva:any;
  progress:string="0"
  category:any;
  ngOnInit(): void {
    this.name=localStorage.getItem('name')
    this.category=localStorage.getItem("category");
    this.getAllQuestions();
    
    this.startCounter();
  }

  getAllQuestions() {
    this._questionService.getQuestions().subscribe(
      res=>{
        if(this.category=="computer"){
          this.questionList = res.ordinateur;
        }
        if(this.category=="angular"){
          this.questionList = res.questions;
        }
        if(this.category=="internet"){
          this.questionList = res.internet;
        }
        if(this.category=="network"){
          this.questionList = res.network;
        }
      },
      err=>{
        console.log(err)
      }
      
    )
  }


  startCounter(){
    console.log(this.time)
    this.interva =  interval(1000).subscribe(
      val=>{
        console.log(this.time)
        this.time--; 
        if(this.time===0){
          this.currentQuestion++;
          this.time=60;
          this.points-=10;
        }
      }
    );
    setTimeout(()=>{
      this.interva.unsubscribe();
    },6000000)
    
  }
  stopCounter(){
    this.interva.unsubscribe();
    this.time=0;
  }
  
  resetCounter(){
    this.stopCounter();
    this.time=60;
    this.startCounter()
  }
  nextQuestion(){
    if(this.currentQuestion<8){
      this.currentQuestion++;
      console.log(this.currentQuestion)
    }
  }
  previousQuestion(){
    if(0<this.currentQuestion){
      this.currentQuestion--;
    }
  }
  resetQuestion(){
    this.resetCounter();
    this.currentQuestion=0;
    this.getAllQuestions()
    this.progress="0";
  }
  chooseAnswer(curr:number,option:any){
    this.getProgressPercent()
    if(option.correct){
      this.points+=10;
      this.correctAnswer++;
      console.log(this.points)
    }
    else{
      this.points-=10;
    }
    this.nextQuestion()
  }
  getProgressPercent(){
    this.progress = (((this.currentQuestion+1)/this.questionList.length)*100).toString();
    return this.progress
  }
}
