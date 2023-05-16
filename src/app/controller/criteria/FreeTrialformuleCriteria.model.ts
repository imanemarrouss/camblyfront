import {InscriptionCriteria} from './InscriptionCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class FreeTrialformuleCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public dayspeerweek: string;
    public dayspeerweekLike: string;
    public timeperday: string;
    public timeperdayLike: string;
    public teacherGenderoption: string;
    public teacherGenderoptionLike: string;
    public teacherAgeRange: string;
    public teacherAgeRangeLike: string;
    public teacherPersonnality: string;
    public teacherPersonnalityLike: string;
    public status: null | boolean;
    public dateConfirmation: Date;
    public dateConfirmationFrom: Date;
    public dateConfirmationTo: Date;
  public inscription: InscriptionCriteria ;
  public inscriptions: Array<InscriptionCriteria> ;

}
