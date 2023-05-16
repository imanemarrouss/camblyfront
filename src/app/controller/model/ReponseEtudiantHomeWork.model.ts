import {HoweWorkQSTReponseDto} from './HoweWorkQSTReponse.model';
import {HomeWorkEtudiantDto} from './HomeWorkEtudiant.model';
import {HomeWorkQuestionDto} from './HomeWorkQuestion.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ReponseEtudiantHomeWorkDto  extends BaseDto{

    public id: number;
    public answer: string;
    public profNote: string;
    public note: number;
    public noteMax: string ;
    public noteMin: string ;
    public howeWorkQSTReponse: HoweWorkQSTReponseDto ;
    public homeWorkEtudiant: HomeWorkEtudiantDto ;
    public homeWorkQuestion: HomeWorkQuestionDto ;

}
