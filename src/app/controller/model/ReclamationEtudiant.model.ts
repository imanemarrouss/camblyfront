import {TypeReclamationEtudiantDto} from './TypeReclamationEtudiant.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ReclamationEtudiantDto  extends BaseDto{

    public id: number;
    public reference: string;
   public dateReclamation: Date;
    public message: string;
    public setFrom: string;
    public img: string;
   public traite: null | boolean;
   public dateTraitement: Date;
   public dateReponse: Date;
   public postView: null | boolean;
    public objetReclamationEtudiant: string;
    public commentaireTraiteur: string;
    public username: string;
    public dateReclamationMax: string ;
    public dateReclamationMin: string ;
    public dateTraitementMax: string ;
    public dateTraitementMin: string ;
    public dateReponseMax: string ;
    public dateReponseMin: string ;
    public typeReclamationEtudiant: TypeReclamationEtudiantDto ;

}
