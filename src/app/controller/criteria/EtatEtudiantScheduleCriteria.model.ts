import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class EtatEtudiantScheduleCriteria  extends   BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public libelle: string;
    public libelleLike: string;
    public couleur: string;
    public couleurLike: string;

}
