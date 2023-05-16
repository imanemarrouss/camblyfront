import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class FaqTypeDto  extends BaseDto{

    public id: number;
    public destinataire: string;
    public libelle: string;

}
