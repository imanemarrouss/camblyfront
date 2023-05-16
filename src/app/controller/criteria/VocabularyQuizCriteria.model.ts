import {VocabularyCriteria} from './VocabularyCriteria.model';
import {SectionCriteria} from './SectionCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class VocabularyQuizCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public dateDebut: Date;
    public dateDebutFrom: Date;
    public dateDebutTo: Date;
    public dateFin: Date;
    public dateFinFrom: Date;
    public dateFinTo: Date;
  public section: SectionCriteria ;
  public sections: Array<SectionCriteria> ;
      public vocabularys: Array<VocabularyCriteria>;

}
