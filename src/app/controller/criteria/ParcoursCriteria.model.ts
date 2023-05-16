import {EtudiantCriteria} from './EtudiantCriteria.model';
import {CentreCriteria} from './CentreCriteria.model';
import {CoursCriteria} from './CoursCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ParcoursCriteria  extends   BaseCriteria  {

    public id: number;
    public datePublication: Date;
    public datePublicationFrom: Date;
    public datePublicationTo: Date;
    public dateCreation: Date;
    public dateCreationFrom: Date;
    public dateCreationTo: Date;
    public description: string;
    public descriptionLike: string;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
     public numeroOrder: number;
     public numeroOrderMin: number;
     public numeroOrderMax: number;
     public nombreCours: number;
     public nombreCoursMin: number;
     public nombreCoursMax: number;
  public centre: CentreCriteria ;
  public centres: Array<CentreCriteria> ;
      public courss: Array<CoursCriteria>;
      public etudiants: Array<EtudiantCriteria>;

}
