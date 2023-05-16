import {ParcoursCriteria} from './ParcoursCriteria.model';
import {GroupeEtudiantDetailCriteria} from './GroupeEtudiantDetailCriteria.model';
import {GroupeEtudeCriteria} from './GroupeEtudeCriteria.model';
import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class GroupeEtudiantCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public niveau: string;
    public niveauLike: string;
    public dateDebut: Date;
    public dateDebutFrom: Date;
    public dateDebutTo: Date;
    public dateFin: Date;
    public dateFinFrom: Date;
    public dateFinTo: Date;
     public nombrePlace: number;
     public nombrePlaceMin: number;
     public nombrePlaceMax: number;
     public nombrePlacevide: number;
     public nombrePlacevideMin: number;
     public nombrePlacevideMax: number;
     public nombrePlaceNonVide: number;
     public nombrePlaceNonVideMin: number;
     public nombrePlaceNonVideMax: number;
  public groupeEtude: GroupeEtudeCriteria ;
  public groupeEtudes: Array<GroupeEtudeCriteria> ;
  public parcours: ParcoursCriteria ;
  public parcourss: Array<ParcoursCriteria> ;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;
      public groupeEtudiantDetails: Array<GroupeEtudiantDetailCriteria>;

}
