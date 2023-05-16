import {GroupeEtudiantDto} from './GroupeEtudiant.model';
import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PaiementDto  extends BaseDto{

    public id: number;
   public datePaiement: Date;
    public datePaiementMax: string ;
    public datePaiementMin: string ;
    public prof: ProfDto ;
    public groupeEtudiant: GroupeEtudiantDto ;

}
