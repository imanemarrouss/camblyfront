import {EtatReponseDto} from './EtatReponse.model';
import {QuestionDto} from './Question.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ReponseDto  extends BaseDto{

    public id: number;
    public ref: string;
    public lib: string;
   public numero: number;
    public numeroMax: string ;
    public numeroMin: string ;
    public etatReponse: EtatReponseDto ;
    public question: QuestionDto ;

}
