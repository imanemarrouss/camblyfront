import {FaqTypeCriteria} from './FaqTypeCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class FaqCriteria  extends   BaseCriteria  {

    public id: number;
    public description: string;
    public descriptionLike: string;
    public libelle: string;
    public libelleLike: string;
  public faqType: FaqTypeCriteria ;
  public faqTypes: Array<FaqTypeCriteria> ;

}
