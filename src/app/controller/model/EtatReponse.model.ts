import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class EtatReponseDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;

}
