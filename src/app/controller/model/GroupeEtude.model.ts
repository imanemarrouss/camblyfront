import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class GroupeEtudeDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public description: string;
   public nombreEtudiant: number;
    public nombreEtudiantMax: string ;
    public nombreEtudiantMin: string ;

}
