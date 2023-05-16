import {SessionCoursDto} from './SessionCours.model';
import {CategorieSectionDto} from './CategorieSection.model';
import {CoursDto} from './Cours.model';
import {SectionItemDto} from './SectionItem.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class SectionDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;
    public urlImage: string;
    public urlImage2: string;
    public urlImage3: string;
    public urlVideo: string;
    public contenu: string;
    public questions: string;
    public indicationProf: string;
   public numeroOrder: number;
   public url: number;
   public content: number;
    public numeroOrderMax: string ;
    public numeroOrderMin: string ;
    public urlMax: string ;
    public urlMin: string ;
    public contentMax: string ;
    public contentMin: string ;
    public categorieSection: CategorieSectionDto ;
    public cours: CoursDto ;
    public sessionCours: SessionCoursDto ;
     public sectionItems: Array<SectionItemDto>;

}
