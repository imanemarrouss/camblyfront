import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class NewsCriteria  extends   BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public libelle: string;
    public libelleLike: string;
    public image: string;
    public imageLike: string;
    public description: string;
    public descriptionLike: string;
    public dateNews: Date;
    public dateNewsFrom: Date;
    public dateNewsTo: Date;
    public dateDebut: Date;
    public dateDebutFrom: Date;
    public dateDebutTo: Date;
    public dateFin: Date;
    public dateFinFrom: Date;
    public dateFinTo: Date;
     public numeroOrdre: number;
     public numeroOrdreMin: number;
     public numeroOrdreMax: number;
    public destinataire: string;
    public destinataireLike: string;

}
