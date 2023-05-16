import {ParcoursDto} from './Parcours.model';
import {GroupeEtudiantDetailDto} from './GroupeEtudiantDetail.model';
import {GroupeEtudeDto} from './GroupeEtude.model';
import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class GroupeEtudiantDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public niveau: string;
   public dateDebut: Date;
   public dateFin: Date;
   public nombrePlace: number;
   public nombrePlacevide: number;
   public nombrePlaceNonVide: number;
    public dateDebutMax: string ;
    public dateDebutMin: string ;
    public dateFinMax: string ;
    public dateFinMin: string ;
    public nombrePlaceMax: string ;
    public nombrePlaceMin: string ;
    public nombrePlacevideMax: string ;
    public nombrePlacevideMin: string ;
    public nombrePlaceNonVideMax: string ;
    public nombrePlaceNonVideMin: string ;
    public groupeEtude: GroupeEtudeDto ;
    public parcours: ParcoursDto ;
    public prof: ProfDto ;
     public groupeEtudiantDetails: Array<GroupeEtudiantDetailDto>;

}
