import {GroupeEtudiantCriteria} from './GroupeEtudiantCriteria.model';
import {CoursCriteria} from './CoursCriteria.model';
import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ScheduleProfCriteria  extends   BaseCriteria  {

    public id: number;
    public subject: string;
    public subjectLike: string;
    public startTime: Date;
    public startTimeFrom: Date;
    public startTimeTo: Date;
    public endTime: Date;
    public endTimeFrom: Date;
    public endTimeTo: Date;
    public ref: string;
    public refLike: string;
    public grpName: string;
    public grpNameLike: string;
    public profName: string;
    public profNameLike: string;
     public profsId: number;
     public profsIdMin: number;
     public profsIdMax: number;
  public groupeEtudiant: GroupeEtudiantCriteria ;
  public groupeEtudiants: Array<GroupeEtudiantCriteria> ;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;
  public cours: CoursCriteria ;
  public courss: Array<CoursCriteria> ;

}
