import {FaqTypeDto} from './FaqType.model';
import {AdminDto} from './Admin.model';
import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class FaqProfDto  extends BaseDto{

    public id: number;
    public description: string;
    public libelle: string;
    public prof: ProfDto ;
    public admin: AdminDto ;
    public faqType: FaqTypeDto ;

}
