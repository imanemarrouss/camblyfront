import {TypeReclamationEtudiantCriteria} from './TypeReclamationEtudiantCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ReclamationEtudiantCriteria  extends   BaseCriteria  {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public dateReclamation: Date;
    public dateReclamationFrom: Date;
    public dateReclamationTo: Date;
    public message: string;
    public messageLike: string;
    public setFrom: string;
    public setFromLike: string;
    public img: string;
    public imgLike: string;
    public traite: null | boolean;
    public dateTraitement: Date;
    public dateTraitementFrom: Date;
    public dateTraitementTo: Date;
    public dateReponse: Date;
    public dateReponseFrom: Date;
    public dateReponseTo: Date;
    public postView: null | boolean;
    public objetReclamationEtudiant: string;
    public objetReclamationEtudiantLike: string;
    public commentaireTraiteur: string;
    public commentaireTraiteurLike: string;
    public username: string;
    public usernameLike: string;
  public typeReclamationEtudiant: TypeReclamationEtudiantCriteria ;
  public typeReclamationEtudiants: Array<TypeReclamationEtudiantCriteria> ;

}
