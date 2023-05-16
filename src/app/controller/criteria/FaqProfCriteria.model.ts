import {FaqTypeCriteria} from './FaqTypeCriteria.model';
import {AdminCriteria} from './AdminCriteria.model';
import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class FaqProfCriteria  extends   BaseCriteria  {

    public id: number;
    public description: string;
    public descriptionLike: string;
    public libelle: string;
    public libelleLike: string;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;
  public admin: AdminCriteria ;
  public admins: Array<AdminCriteria> ;
  public faqType: FaqTypeCriteria ;
  public faqTypes: Array<FaqTypeCriteria> ;

}
