import {GroupeEtudiantCriteria} from './GroupeEtudiantCriteria.model';
import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class PaiementCriteria  extends   BaseCriteria  {

    public id: number;
    public datePaiement: Date;
    public datePaiementFrom: Date;
    public datePaiementTo: Date;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;
  public groupeEtudiant: GroupeEtudiantCriteria ;
  public groupeEtudiants: Array<GroupeEtudiantCriteria> ;

}
