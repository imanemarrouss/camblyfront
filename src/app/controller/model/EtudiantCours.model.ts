import {EtudiantDto} from './Etudiant.model';
import {CoursDto} from './Cours.model';
import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class EtudiantCoursDto  extends BaseDto{

    public id: number;
   public payer: null | boolean;
   public dateFin: Date;
    public dateFinMax: string ;
    public dateFinMin: string ;
    public etudiant: EtudiantDto ;
    public prof: ProfDto ;
    public cours: CoursDto ;

}
