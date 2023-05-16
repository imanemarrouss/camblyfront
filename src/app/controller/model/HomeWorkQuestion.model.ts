import {HoweWorkQSTReponseDto} from './HoweWorkQSTReponse.model';
import {TypeDeQuestionDto} from './TypeDeQuestion.model';
import {HomeWorkDto} from './HomeWork.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class HomeWorkQuestionDto  extends BaseDto{

    public id: number;
    public ref: string;
    public libelle: string;
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
    public homeWork: HomeWorkDto ;
     public howeWorkQSTReponses: Array<HoweWorkQSTReponseDto>;

}
