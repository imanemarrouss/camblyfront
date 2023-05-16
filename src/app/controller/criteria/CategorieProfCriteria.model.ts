import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class CategorieProfCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public level: string;
    public levelLike: string;
     public lessonRate: number;
     public lessonRateMin: number;
     public lessonRateMax: number;
      public profs: Array<ProfCriteria>;

}
