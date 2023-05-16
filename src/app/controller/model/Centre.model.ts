import {ParcoursDto} from './Parcours.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CentreDto  extends BaseDto{

    public id: number;
    public ref: string;
    public libelle: string;
    public description: string;
    public log: string;
    public password: string;
     public parcourss: Array<ParcoursDto>;

}
