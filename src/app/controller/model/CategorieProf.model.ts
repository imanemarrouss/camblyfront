import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CategorieProfDto  extends BaseDto{

    public id: number;
    public code: string;
    public level: string;
    public lessonRate: number;
    public lessonRateMax: string ;
    public lessonRateMin: string ;
     public profs: Array<ProfDto>;

}
