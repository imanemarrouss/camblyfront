import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class SalaryCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
     public mois: number;
     public moisMin: number;
     public moisMax: number;
     public annee: number;
     public anneeMin: number;
     public anneeMax: number;
     public nbrSessionMensuel: number;
     public nbrSessionMensuelMin: number;
     public nbrSessionMensuelMax: number;
    public payer: null | boolean;
     public totalPayment: number;
     public totalPaymentMin: number;
     public totalPaymentMax: number;
     public totalBonusClassAverage: number;
     public totalBonusClassAverageMin: number;
     public totalBonusClassAverageMax: number;
     public totalBonusWorkload: number;
     public totalBonusWorkloadMin: number;
     public totalBonusWorkloadMax: number;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;

}
