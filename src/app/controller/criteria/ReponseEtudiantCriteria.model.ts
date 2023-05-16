import {QuizEtudiantCriteria} from './QuizEtudiantCriteria.model';
import {QuestionCriteria} from './QuestionCriteria.model';
import {ReponseCriteria} from './ReponseCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ReponseEtudiantCriteria  extends   BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public answer: string;
    public answerLike: string;
     public note: number;
     public noteMin: number;
     public noteMax: number;
  public reponse: ReponseCriteria ;
  public reponses: Array<ReponseCriteria> ;
  public quizEtudiant: QuizEtudiantCriteria ;
  public quizEtudiants: Array<QuizEtudiantCriteria> ;
  public question: QuestionCriteria ;
  public questions: Array<QuestionCriteria> ;

}
