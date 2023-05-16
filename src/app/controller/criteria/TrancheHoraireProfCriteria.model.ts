import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class TrancheHoraireProfCriteria  extends   BaseCriteria  {

    public id: number;
    public startHour: string;
    public startHourLike: string;
    public endHour: string;
    public endHourLike: string;
     public day: number;
     public dayMin: number;
     public dayMax: number;
     public groupIndex: number;
     public groupIndexMin: number;
     public groupIndexMax: number;
     public profsId: number;
     public profsIdMin: number;
     public profsIdMax: number;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;

}
