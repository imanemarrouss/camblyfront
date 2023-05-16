import {ParcoursDto} from './Parcours.model';
import {EtatCoursDto} from './EtatCours.model';
import {SectionDto} from './Section.model';
import {HomeWorkDto} from './HomeWork.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CoursDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;
    public description: string;
    public image: string;
   public nombreSectionFinalise: number;
   public nombreSectionEnCours: number;
   public nombreLinkEnCours: number;
   public nombreLinkFinalise: number;
   public numeroOrder: number;
    public nombreSectionFinaliseMax: string ;
    public nombreSectionFinaliseMin: string ;
    public nombreSectionEnCoursMax: string ;
    public nombreSectionEnCoursMin: string ;
    public nombreLinkEnCoursMax: string ;
    public nombreLinkEnCoursMin: string ;
    public nombreLinkFinaliseMax: string ;
    public nombreLinkFinaliseMin: string ;
    public numeroOrderMax: string ;
    public numeroOrderMin: string ;
    public etatCours: EtatCoursDto ;
    public parcours: ParcoursDto ;
     public sections: Array<SectionDto>;
     public homeWorks: Array<HomeWorkDto>;

}
