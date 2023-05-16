import {ParcoursCriteria} from './ParcoursCriteria.model';
import {EtatCoursCriteria} from './EtatCoursCriteria.model';
import {SectionCriteria} from './SectionCriteria.model';
import {HomeWorkCriteria} from './HomeWorkCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class CoursCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
    public description: string;
    public descriptionLike: string;
    public image: string;
    public imageLike: string;
     public nombreSectionFinalise: number;
     public nombreSectionFinaliseMin: number;
     public nombreSectionFinaliseMax: number;
     public nombreSectionEnCours: number;
     public nombreSectionEnCoursMin: number;
     public nombreSectionEnCoursMax: number;
     public nombreLinkEnCours: number;
     public nombreLinkEnCoursMin: number;
     public nombreLinkEnCoursMax: number;
     public nombreLinkFinalise: number;
     public nombreLinkFinaliseMin: number;
     public nombreLinkFinaliseMax: number;
     public numeroOrder: number;
     public numeroOrderMin: number;
     public numeroOrderMax: number;
  public etatCours: EtatCoursCriteria ;
  public etatCourss: Array<EtatCoursCriteria> ;
  public parcours: ParcoursCriteria ;
  public parcourss: Array<ParcoursCriteria> ;
      public sections: Array<SectionCriteria>;
      public homeWorks: Array<HomeWorkCriteria>;

}
