import {FreeTrialTeacherEmailTemplateDto} from './FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherWhatsTemplateDto} from './FreeTrialTeacherWhatsTemplate.model';
import {StatutFreeTrialDto} from './StatutFreeTrial.model';
import {FreeTrialConfigurationDto} from './FreeTrialConfiguration.model';
import {FreeTrialStudentEmailTemplateDto} from './FreeTrialStudentEmailTemplate.model';
import {FreeTrialDetailDto} from './FreeTrialDetail.model';
import {ProfDto} from './Prof.model';
import {NiveauEtudeDto} from './NiveauEtude.model';
import {FreeTrialStudentWhatsTemplateDto} from './FreeTrialStudentWhatsTemplate.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class FreeTrialDto  extends BaseDto{

    public id: number;
    public reference: string;
   public dateFreeTrial: Date;
    public link: string;
   public emailTeacherSent: null | boolean;
   public emailTeacherSendingDate: Date;
   public whatsTeacherSent: null | boolean;
   public whatsTeacherSendingDate: Date;
   public dateFreeTrialPremierRappel: Date;
   public dateFreeTrialPremierDeuxiemeRappel: Date;
   public nombreStudentTotal: number;
   public nombreStudentAbonne: number;
   public nombreStudentPresent: number;
    public dateFreeTrialMax: string ;
    public dateFreeTrialMin: string ;
    public emailTeacherSendingDateMax: string ;
    public emailTeacherSendingDateMin: string ;
    public whatsTeacherSendingDateMax: string ;
    public whatsTeacherSendingDateMin: string ;
    public dateFreeTrialPremierRappelMax: string ;
    public dateFreeTrialPremierRappelMin: string ;
    public dateFreeTrialPremierDeuxiemeRappelMax: string ;
    public dateFreeTrialPremierDeuxiemeRappelMin: string ;
    public nombreStudentTotalMax: string ;
    public nombreStudentTotalMin: string ;
    public nombreStudentAbonneMax: string ;
    public nombreStudentAbonneMin: string ;
    public nombreStudentPresentMax: string ;
    public nombreStudentPresentMin: string ;
    public prof: ProfDto ;
    public niveauEtude: NiveauEtudeDto ;
    public freeTrialStudentWhatsTemplate: FreeTrialStudentWhatsTemplateDto ;
    public freeTrialStudentEmailTemplate: FreeTrialStudentEmailTemplateDto ;
    public freeTrialTeacherEmailTemplate: FreeTrialTeacherEmailTemplateDto ;
    public freeTrialTeacherWhatsTemplate: FreeTrialTeacherWhatsTemplateDto ;
    public freeTrialConfiguration: FreeTrialConfigurationDto ;
    public statutFreeTrial: StatutFreeTrialDto ;
     public freeTrialDetails: Array<FreeTrialDetailDto>;

}
