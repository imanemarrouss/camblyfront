import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class EtatEtudiantScheduleDto  extends BaseDto{

    public id: number;
    public ref: string;
    public libelle: string;
    public couleur: string;

}
