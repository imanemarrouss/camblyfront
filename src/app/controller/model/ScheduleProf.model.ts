import {GroupeEtudiantDto} from './GroupeEtudiant.model';
import {CoursDto} from './Cours.model';
import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ScheduleProfDto  extends BaseDto{

    public id: number;
    public subject: string;
   public startTime: Date;
   public endTime: Date;
    public ref: string;
    public grpName: string;
    public profName: string;
   public profsId: number;
    public startTimeMax: string ;
    public startTimeMin: string ;
    public endTimeMax: string ;
    public endTimeMin: string ;
    public profsIdMax: string ;
    public profsIdMin: string ;
    public groupeEtudiant: GroupeEtudiantDto ;
    public prof: ProfDto ;
    public cours: CoursDto ;

}
