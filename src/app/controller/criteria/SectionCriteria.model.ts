import {SessionCoursCriteria} from './SessionCoursCriteria.model';
import {CategorieSectionCriteria} from './CategorieSectionCriteria.model';
import {CoursCriteria} from './CoursCriteria.model';
import {SectionItemCriteria} from './SectionItemCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class SectionCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
    public urlImage: string;
    public urlImageLike: string;
    public urlImage2: string;
    public urlImage2Like: string;
    public urlImage3: string;
    public urlImage3Like: string;
    public urlVideo: string;
    public urlVideoLike: string;
    public contenu: string;
    public contenuLike: string;
    public questions: string;
    public questionsLike: string;
    public indicationProf: string;
    public indicationProfLike: string;
     public numeroOrder: number;
     public numeroOrderMin: number;
     public numeroOrderMax: number;
     public url: number;
     public urlMin: number;
     public urlMax: number;
     public content: number;
     public contentMin: number;
     public contentMax: number;
  public categorieSection: CategorieSectionCriteria ;
  public categorieSections: Array<CategorieSectionCriteria> ;
  public cours: CoursCriteria ;
  public courss: Array<CoursCriteria> ;
  public sessionCours: SessionCoursCriteria ;
  public sessionCourss: Array<SessionCoursCriteria> ;
      public sectionItems: Array<SectionItemCriteria>;

}
