import {ParcoursDto} from './Parcours.model';
import {PriceDto} from './Price.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PackStudentDto  extends BaseDto{

    public id: number;
   public nombreCours: number;
   public forGroupe: null | boolean;
    public code: string;
    public libelle: string;
    public description: string;
    public preRequisites: string;
    public whyTakeThisCourse: string;
    public expectations: string;
    public imgUrl: string;
   public totalStudents: number;
    public rating: string;
    public oldPrice: string;
    public nombreCoursMax: string ;
    public nombreCoursMin: string ;
    public totalStudentsMax: string ;
    public totalStudentsMin: string ;
    public parcours: ParcoursDto ;
    public price: PriceDto ;

}
