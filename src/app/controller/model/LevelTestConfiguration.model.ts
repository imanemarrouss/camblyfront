import {ParcoursDto} from './Parcours.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class LevelTestConfigurationDto  extends BaseDto{

    public id: number;
    public noteMin: number;
    public noteMax: number;
    public noteMinMax: string ;
    public noteMinMin: string ;
    public noteMaxMax: string ;
    public noteMaxMin: string ;
    public parcours: ParcoursDto ;

}
