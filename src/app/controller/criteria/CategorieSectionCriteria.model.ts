import {SectionCriteria} from './SectionCriteria.model';
import {SuperCategorieSectionCriteria} from './SuperCategorieSectionCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class CategorieSectionCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
     public numeroOrder: number;
     public numeroOrderMin: number;
     public numeroOrderMax: number;
  public superCategorieSection: SuperCategorieSectionCriteria ;
  public superCategorieSections: Array<SuperCategorieSectionCriteria> ;
      public sections: Array<SectionCriteria>;

}
