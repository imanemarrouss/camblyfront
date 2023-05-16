import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class TrancheHoraireProfDto  extends BaseDto{

    public id: number;
    public startHour: string;
    public endHour: string;
   public day: number;
   public groupIndex: number;
   public profsId: number;
    public dayMax: string ;
    public dayMin: string ;
    public groupIndexMax: string ;
    public groupIndexMin: string ;
    public profsIdMax: string ;
    public profsIdMin: string ;
    public prof: ProfDto ;

}
