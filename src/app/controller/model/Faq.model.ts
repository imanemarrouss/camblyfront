import {FaqTypeDto} from './FaqType.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class FaqDto  extends BaseDto{

    public id: number;
    public description: string;
    public libelle: string;
    public faqType: FaqTypeDto ;

}
