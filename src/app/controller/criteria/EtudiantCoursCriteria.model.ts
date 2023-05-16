import {EtudiantCriteria} from './EtudiantCriteria.model';
import {CoursCriteria} from './CoursCriteria.model';
import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class EtudiantCoursCriteria  extends   BaseCriteria  {

    public id: number;
    public payer: null | boolean;
    public dateFin: Date;
    public dateFinFrom: Date;
    public dateFinTo: Date;
  public etudiant: EtudiantCriteria ;
  public etudiants: Array<EtudiantCriteria> ;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;
  public cours: CoursCriteria ;
  public courss: Array<CoursCriteria> ;

}
