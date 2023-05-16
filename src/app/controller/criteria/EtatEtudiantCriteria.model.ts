import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class EtatEtudiantCriteria  extends   BaseCriteria  {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public username: string;
    public usernameLike: string;
    public firstName: string;
    public firstNameLike: string;
    public lastName: string;
    public lastNameLike: string;
    public nationnalite: string;
    public nationnaliteLike: string;
    public schedule1: string;
    public schedule1Like: string;
    public schedule2: string;
    public schedule2Like: string;
    public lastClass: string;
    public lastClassLike: string;
    public nbrClass: string;
    public nbrClassLike: string;
    public etat: string;
    public etatLike: string;
     public etatNumber: number;
     public etatNumberMin: number;
     public etatNumberMax: number;

}
