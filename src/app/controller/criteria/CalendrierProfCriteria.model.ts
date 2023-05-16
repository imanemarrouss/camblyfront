import {EtudiantCriteria} from './EtudiantCriteria.model';
import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class CalendrierProfCriteria  extends   BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public startTime: string;
    public startTimeLike: string;
    public endTime: string;
    public endTimeLike: string;
    public startRecur: Date;
    public startRecurFrom: Date;
    public startRecurTo: Date;
    public endRecur: Date;
    public endRecurFrom: Date;
    public endRecurTo: Date;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;
  public etudiant: EtudiantCriteria ;
  public etudiants: Array<EtudiantCriteria> ;

}
