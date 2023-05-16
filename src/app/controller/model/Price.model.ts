import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PriceDto  extends BaseDto{

    public id: number;
    public price: number;
    public oldPrice: number;
    public lib: string;
    public nreCourse: number;
    public nreHours: number;
    public nreMonth: number;
   public forGroup: null | boolean;
    public priceMax: string ;
    public priceMin: string ;
    public oldPriceMax: string ;
    public oldPriceMin: string ;
    public nreCourseMax: string ;
    public nreCourseMin: string ;
    public nreHoursMax: string ;
    public nreHoursMin: string ;
    public nreMonthMax: string ;
    public nreMonthMin: string ;

}
