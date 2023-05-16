import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ClassAverageBonusDto  extends BaseDto{

    public id: number;
    public code: string;
   public nombreSession: number;
    public prix: number;
    public nombreSessionMax: string ;
    public nombreSessionMin: string ;
    public prixMax: string ;
    public prixMin: string ;

}
