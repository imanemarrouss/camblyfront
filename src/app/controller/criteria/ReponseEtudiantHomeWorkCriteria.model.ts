import {HoweWorkQSTReponseCriteria} from './HoweWorkQSTReponseCriteria.model';
import {HomeWorkEtudiantCriteria} from './HomeWorkEtudiantCriteria.model';
import {HomeWorkQuestionCriteria} from './HomeWorkQuestionCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ReponseEtudiantHomeWorkCriteria  extends   BaseCriteria  {

    public id: number;
    public answer: string;
    public answerLike: string;
    public profNote: string;
    public profNoteLike: string;
     public note: number;
     public noteMin: number;
     public noteMax: number;
  public howeWorkQSTReponse: HoweWorkQSTReponseCriteria ;
  public howeWorkQSTReponses: Array<HoweWorkQSTReponseCriteria> ;
  public homeWorkEtudiant: HomeWorkEtudiantCriteria ;
  public homeWorkEtudiants: Array<HomeWorkEtudiantCriteria> ;
  public homeWorkQuestion: HomeWorkQuestionCriteria ;
  public homeWorkQuestions: Array<HomeWorkQuestionCriteria> ;

}
