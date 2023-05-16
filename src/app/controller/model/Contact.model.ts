import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ContactDto  extends BaseDto{

    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public setFrom: string;
   public dateContact: Date;
   public replied: null | boolean;
    public message: string;
    public dateContactMax: string ;
    public dateContactMin: string ;

}
