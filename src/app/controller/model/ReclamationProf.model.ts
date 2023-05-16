import {TypeReclamationProfDto} from './TypeReclamationProf.model';
import {AdminDto} from './Admin.model';
import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ReclamationProfDto  extends BaseDto{

    public id: number;
    public reference: string;
   public dateReclamation: Date;
    public message: string;
   public traite: null | boolean;
   public dateTraitement: Date;
   public dateReponse: Date;
   public postView: null | boolean;
    public commentaireTraiteur: string;
    public objetReclamationProf: string;
    public dateReclamationMax: string ;
    public dateReclamationMin: string ;
    public dateTraitementMax: string ;
    public dateTraitementMin: string ;
    public dateReponseMax: string ;
    public dateReponseMin: string ;
    public admin: AdminDto ;
    public prof: ProfDto ;
    public typeReclamationProf: TypeReclamationProfDto ;

}
