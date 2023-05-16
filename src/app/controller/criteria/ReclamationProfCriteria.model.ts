import {TypeReclamationProfCriteria} from './TypeReclamationProfCriteria.model';
import {AdminCriteria} from './AdminCriteria.model';
import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ReclamationProfCriteria  extends   BaseCriteria  {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public dateReclamation: Date;
    public dateReclamationFrom: Date;
    public dateReclamationTo: Date;
    public message: string;
    public messageLike: string;
    public traite: null | boolean;
    public dateTraitement: Date;
    public dateTraitementFrom: Date;
    public dateTraitementTo: Date;
    public dateReponse: Date;
    public dateReponseFrom: Date;
    public dateReponseTo: Date;
    public postView: null | boolean;
    public commentaireTraiteur: string;
    public commentaireTraiteurLike: string;
    public objetReclamationProf: string;
    public objetReclamationProfLike: string;
  public admin: AdminCriteria ;
  public admins: Array<AdminCriteria> ;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;
  public typeReclamationProf: TypeReclamationProfCriteria ;
  public typeReclamationProfs: Array<TypeReclamationProfCriteria> ;

}
