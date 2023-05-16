import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class SalaryDto  extends BaseDto{

    public id: number;
    public code: string;
   public mois: number;
   public annee: number;
    public nbrSessionMensuel: number;
   public payer: null | boolean;
    public totalPayment: number;
    public totalBonusClassAverage: number;
    public totalBonusWorkload: number;
    public moisMax: string ;
    public moisMin: string ;
    public anneeMax: string ;
    public anneeMin: string ;
    public nbrSessionMensuelMax: string ;
    public nbrSessionMensuelMin: string ;
    public totalPaymentMax: string ;
    public totalPaymentMin: string ;
    public totalBonusClassAverageMax: string ;
    public totalBonusClassAverageMin: string ;
    public totalBonusWorkloadMax: string ;
    public totalBonusWorkloadMin: string ;
    public prof: ProfDto ;

}
