import {QuizDto} from './Quiz.model';
import {TypeDeQuestionDto} from './TypeDeQuestion.model';
import {ReponseDto} from './Reponse.model';
import {HomeWorkDto} from './HomeWork.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class QuestionDto  extends BaseDto{

    public id: number;
    public ref: string;
    public libelle: string;
    public urlImg: string;
    public urlVideo: string;
   public numero: number;
    public pointReponseJuste: number;
    public pointReponsefausse: number;
    public numeroMax: string ;
    public numeroMin: string ;
    public pointReponseJusteMax: string ;
    public pointReponseJusteMin: string ;
    public pointReponsefausseMax: string ;
    public pointReponsefausseMin: string ;
    public typeDeQuestion: TypeDeQuestionDto ;
    public quiz: QuizDto ;
    public homeWork: HomeWorkDto ;
     public reponses: Array<ReponseDto>;

}
