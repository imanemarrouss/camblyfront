import {EtatReponseDto} from './EtatReponse.model';
import {HomeWorkQuestionDto} from './HomeWorkQuestion.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class HoweWorkQSTReponseDto  extends BaseDto{

    public id: number;
    public ref: string;
    public lib: string;
   public numero: number;
    public numeroMax: string ;
    public numeroMin: string ;
    public etatReponse: EtatReponseDto ;
    public homeWorkQuestion: HomeWorkQuestionDto ;

}
