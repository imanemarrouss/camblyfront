import {EtudiantDto} from './Etudiant.model';
import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CalendrierProfDto  extends BaseDto{

    public id: number;
    public ref: string;
    public startTime: string;
    public endTime: string;
   public startRecur: Date;
   public endRecur: Date;
    public startRecurMax: string ;
    public startRecurMin: string ;
    public endRecurMax: string ;
    public endRecurMin: string ;
    public prof: ProfDto ;
    public etudiant: EtudiantDto ;

}
