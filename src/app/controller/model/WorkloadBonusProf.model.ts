import {SalaryDto} from './Salary.model';
import {WorkloadBonusDto} from './WorkloadBonus.model';
import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class WorkloadBonusProfDto  extends BaseDto{

    public id: number;
   public mois: number;
   public annee: number;
    public moisMax: string ;
    public moisMin: string ;
    public anneeMax: string ;
    public anneeMin: string ;
    public workloadBonus: WorkloadBonusDto ;
    public prof: ProfDto ;
    public salary: SalaryDto ;

}
