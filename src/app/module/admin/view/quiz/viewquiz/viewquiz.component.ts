import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../../../controller/service/Quiz.service";
import {QuizDto} from "../../../../../controller/model/Quiz.model";
import {QuestionDto} from "../../../../../controller/model/Question.model";
import {HttpClient} from "@angular/common/http";
import {ReponseDto} from "../../../../../controller/model/Reponse.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-viewquiz',
  templateUrl: './viewquiz.component.html',
  styleUrls: ['./viewquiz.component.scss']
})
export class ViewquizComponent {
  quiz: QuizDto;
  questions: Array<QuestionDto>;
  currentQuestionIndex: number = 0;
  reponses: Array<ReponseDto>;
  pointjuste: number=0;
  pointfaux: number=0;
  score: number=0;
  maxScore: number=0;
  selectedAnswers: boolean [][]= [];
  quizSubmitted: boolean=false;
  showCorrectedQuiz: boolean;
  selectedAnswer: any;

  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
   // const idQ = this.route.snapshot.paramMap.get('id');

    this.http.get<QuizDto>('http://localhost:8036/api/admin/quiz/id/38').subscribe((data) => {
      this.quiz = data;
      this.questions = data.questions;
      //this.reponses =  data.questions.reponses
      this.selectedAnswers = this.questions.map(() => []);
    });


    }






  submitQuiz() {
    let totalPointsJuste = 0;
    let totalPointsFaux = 0;
    this.maxScore = 0;
    console.log('questions', this.questions);
    for (const [i, question] of this.questions.entries()) {
      let pointsJuste = 0;
      let pointsFaux = 0;
      let isQuestionCorrect = true;

      for (const [j, reponse] of question.reponses.entries()) {
        if (reponse.etatReponse.libelle === 'correct' && this.selectedAnswers[i][j]) {
          console.log('libelle', reponse.etatReponse.libelle);
          pointsJuste += question.pointReponseJuste;
        } else if (reponse.etatReponse.libelle === 'incorrect' && this.selectedAnswers[i][j]) {
          pointsFaux += question.pointReponsefausse;
          isQuestionCorrect = false;
        }
      }

      if (isQuestionCorrect) {
        totalPointsJuste += pointsJuste;
      } else {
        totalPointsFaux += pointsFaux;
      }

      this.maxScore += question.pointReponseJuste;
    }

    this.score = totalPointsJuste - totalPointsFaux;
    console.log('maxScore', this.maxScore);
    this.quizSubmitted=true;
    console.log('score', this.score);
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  submitQuizz() {
    let totalPointsJuste = 0;
    let totalPointsFaux = 0;
    this.maxScore = 0;

    for (const [i, question] of this.questions.entries()) {
      let pointsJuste = 0;
      let pointsFaux = 0;
      let isQuestionCorrect = false;

      if (question.typeDeQuestion.lib === 'multiselect') {
        if (question.reponses[0].lib === this.selectedAnswer.lib) {
          pointsJuste += question.pointReponseJuste;
          isQuestionCorrect = true;
        } else {
          pointsFaux += question.pointReponsefausse;
        }
      } else if (question.typeDeQuestion.lib === 'checkbox') {
        let selectedChoices = question.reponses.filter((choice, index) => this.selectedAnswers[i][index]);
        let correctChoices = question.reponses.filter(choice => choice.etatReponse.libelle === 'correct');

        if (selectedChoices.length === correctChoices.length && selectedChoices.length > 0) {
          pointsJuste += question.pointReponseJuste;
          isQuestionCorrect = true;
        } else {
          pointsFaux += question.pointReponsefausse;
        }

      }

      if (isQuestionCorrect) {
        totalPointsJuste += pointsJuste;
      } else {
        totalPointsFaux += pointsFaux;
      }

      this.maxScore += question.pointReponseJuste;
    }

    this.score = totalPointsJuste - totalPointsFaux;
    this.quizSubmitted = true;

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }





  onNextClick() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  onPreviousClick() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }


}
