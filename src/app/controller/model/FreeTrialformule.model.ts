import {InscriptionDto} from './Inscription.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class FreeTrialformuleDto  extends BaseDto{

    public id: number;
    public code: string;
    public dayspeerweek: string;
    public timeperday: string;
    public teacherGenderoption: string;
    public teacherAgeRange: string;
    public teacherPersonnality: string;
   public status: null | boolean;
   public dateConfirmation: Date;
    public dateConfirmationMax: string ;
    public dateConfirmationMin: string ;
    public inscription: InscriptionDto ;

}
