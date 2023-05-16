import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class GroupeEtudeCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public description: string;
    public descriptionLike: string;
     public nombreEtudiant: number;
     public nombreEtudiantMin: number;
     public nombreEtudiantMax: number;

}
