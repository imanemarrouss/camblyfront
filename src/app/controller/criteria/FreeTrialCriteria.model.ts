import {FreeTrialTeacherEmailTemplateCriteria} from './FreeTrialTeacherEmailTemplateCriteria.model';
import {FreeTrialTeacherWhatsTemplateCriteria} from './FreeTrialTeacherWhatsTemplateCriteria.model';
import {StatutFreeTrialCriteria} from './StatutFreeTrialCriteria.model';
import {FreeTrialConfigurationCriteria} from './FreeTrialConfigurationCriteria.model';
import {FreeTrialStudentEmailTemplateCriteria} from './FreeTrialStudentEmailTemplateCriteria.model';
import {FreeTrialDetailCriteria} from './FreeTrialDetailCriteria.model';
import {ProfCriteria} from './ProfCriteria.model';
import {NiveauEtudeCriteria} from './NiveauEtudeCriteria.model';
import {FreeTrialStudentWhatsTemplateCriteria} from './FreeTrialStudentWhatsTemplateCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class FreeTrialCriteria  extends   BaseCriteria  {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public dateFreeTrial: Date;
    public dateFreeTrialFrom: Date;
    public dateFreeTrialTo: Date;
    public link: string;
    public linkLike: string;
    public emailTeacherSent: null | boolean;
    public emailTeacherSendingDate: Date;
    public emailTeacherSendingDateFrom: Date;
    public emailTeacherSendingDateTo: Date;
    public whatsTeacherSent: null | boolean;
    public whatsTeacherSendingDate: Date;
    public whatsTeacherSendingDateFrom: Date;
    public whatsTeacherSendingDateTo: Date;
    public dateFreeTrialPremierRappel: Date;
    public dateFreeTrialPremierRappelFrom: Date;
    public dateFreeTrialPremierRappelTo: Date;
    public dateFreeTrialPremierDeuxiemeRappel: Date;
    public dateFreeTrialPremierDeuxiemeRappelFrom: Date;
    public dateFreeTrialPremierDeuxiemeRappelTo: Date;
     public nombreStudentTotal: number;
     public nombreStudentTotalMin: number;
     public nombreStudentTotalMax: number;
     public nombreStudentAbonne: number;
     public nombreStudentAbonneMin: number;
     public nombreStudentAbonneMax: number;
     public nombreStudentPresent: number;
     public nombreStudentPresentMin: number;
     public nombreStudentPresentMax: number;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;
  public niveauEtude: NiveauEtudeCriteria ;
  public niveauEtudes: Array<NiveauEtudeCriteria> ;
  public freeTrialStudentWhatsTemplate: FreeTrialStudentWhatsTemplateCriteria ;
  public freeTrialStudentWhatsTemplates: Array<FreeTrialStudentWhatsTemplateCriteria> ;
  public freeTrialStudentEmailTemplate: FreeTrialStudentEmailTemplateCriteria ;
  public freeTrialStudentEmailTemplates: Array<FreeTrialStudentEmailTemplateCriteria> ;
  public freeTrialTeacherEmailTemplate: FreeTrialTeacherEmailTemplateCriteria ;
  public freeTrialTeacherEmailTemplates: Array<FreeTrialTeacherEmailTemplateCriteria> ;
  public freeTrialTeacherWhatsTemplate: FreeTrialTeacherWhatsTemplateCriteria ;
  public freeTrialTeacherWhatsTemplates: Array<FreeTrialTeacherWhatsTemplateCriteria> ;
  public freeTrialConfiguration: FreeTrialConfigurationCriteria ;
  public freeTrialConfigurations: Array<FreeTrialConfigurationCriteria> ;
  public statutFreeTrial: StatutFreeTrialCriteria ;
  public statutFreeTrials: Array<StatutFreeTrialCriteria> ;
      public freeTrialDetails: Array<FreeTrialDetailCriteria>;

}
