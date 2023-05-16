import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class NewsDto  extends BaseDto{

    public id: number;
    public ref: string;
    public libelle: string;
    public image: string;
    public description: string;
   public dateNews: Date;
   public dateDebut: Date;
   public dateFin: Date;
   public numeroOrdre: number;
    public destinataire: string;
    public dateNewsMax: string ;
    public dateNewsMin: string ;
    public dateDebutMax: string ;
    public dateDebutMin: string ;
    public dateFinMax: string ;
    public dateFinMin: string ;
    public numeroOrdreMax: string ;
    public numeroOrdreMin: string ;

}
