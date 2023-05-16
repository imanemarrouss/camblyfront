import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class EtatEtudiantDto  extends BaseDto{

    public id: number;
    public reference: string;
    public username: string;
    public firstName: string;
    public lastName: string;
    public nationnalite: string;
    public schedule1: string;
    public schedule2: string;
    public lastClass: string;
    public nbrClass: string;
    public etat: string;
   public etatNumber: number;
    public etatNumberMax: string ;
    public etatNumberMin: string ;

}
