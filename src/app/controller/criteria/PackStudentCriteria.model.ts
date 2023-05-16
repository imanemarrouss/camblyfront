import {ParcoursCriteria} from './ParcoursCriteria.model';
import {PriceCriteria} from './PriceCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class PackStudentCriteria  extends   BaseCriteria  {

    public id: number;
     public nombreCours: number;
     public nombreCoursMin: number;
     public nombreCoursMax: number;
    public forGroupe: null | boolean;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
    public description: string;
    public descriptionLike: string;
    public preRequisites: string;
    public preRequisitesLike: string;
    public whyTakeThisCourse: string;
    public whyTakeThisCourseLike: string;
    public expectations: string;
    public expectationsLike: string;
    public imgUrl: string;
    public imgUrlLike: string;
     public totalStudents: number;
     public totalStudentsMin: number;
     public totalStudentsMax: number;
    public rating: string;
    public ratingLike: string;
    public oldPrice: string;
    public oldPriceLike: string;
  public parcours: ParcoursCriteria ;
  public parcourss: Array<ParcoursCriteria> ;
  public price: PriceCriteria ;
  public prices: Array<PriceCriteria> ;

}
