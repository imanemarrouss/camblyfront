import {SalaryCriteria} from './SalaryCriteria.model';
import {WorkloadBonusCriteria} from './WorkloadBonusCriteria.model';
import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class WorkloadBonusProfCriteria  extends   BaseCriteria  {

    public id: number;
     public mois: number;
     public moisMin: number;
     public moisMax: number;
     public annee: number;
     public anneeMin: number;
     public anneeMax: number;
  public workloadBonus: WorkloadBonusCriteria ;
  public workloadBonuss: Array<WorkloadBonusCriteria> ;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;
  public salary: SalaryCriteria ;
  public salarys: Array<SalaryCriteria> ;

}
