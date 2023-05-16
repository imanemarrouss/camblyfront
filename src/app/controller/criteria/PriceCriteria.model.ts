import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class PriceCriteria  extends   BaseCriteria  {

    public id: number;
     public price: number;
     public priceMin: number;
     public priceMax: number;
     public oldPrice: number;
     public oldPriceMin: number;
     public oldPriceMax: number;
    public lib: string;
    public libLike: string;
     public nreCourse: number;
     public nreCourseMin: number;
     public nreCourseMax: number;
     public nreHours: number;
     public nreHoursMin: number;
     public nreHoursMax: number;
     public nreMonth: number;
     public nreMonthMin: number;
     public nreMonthMax: number;
    public forGroup: null | boolean;

}
