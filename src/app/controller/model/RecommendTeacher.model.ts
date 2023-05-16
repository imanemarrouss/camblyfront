import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class RecommendTeacherDto  extends BaseDto{

    public id: number;
    public ref: string;
   public nombrevote: number;
    public nom: string;
    public prenom: string;
    public commentaire: string;
    public telephone: string;
    public login: string;
   public dateRecommamdation: Date;
    public nombrevoteMax: string ;
    public nombrevoteMin: string ;
    public dateRecommamdationMax: string ;
    public dateRecommamdationMin: string ;
    public prof: ProfDto ;

}
