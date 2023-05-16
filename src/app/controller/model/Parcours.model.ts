import {EtudiantDto} from './Etudiant.model';
import {CentreDto} from './Centre.model';
import {CoursDto} from './Cours.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ParcoursDto  extends BaseDto{

    public id: number;
   public datePublication: Date;
   public dateCreation: Date;
    public description: string;
    public code: string;
    public libelle: string;
   public numeroOrder: number;
   public nombreCours: number;
    public datePublicationMax: string ;
    public datePublicationMin: string ;
    public dateCreationMax: string ;
    public dateCreationMin: string ;
    public numeroOrderMax: string ;
    public numeroOrderMin: string ;
    public nombreCoursMax: string ;
    public nombreCoursMin: string ;
    public centre: CentreDto ;
     public courss: Array<CoursDto>;
     public etudiants: Array<EtudiantDto>;

}
