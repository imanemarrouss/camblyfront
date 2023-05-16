import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class WorkloadBonusCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
     public nombreSession: number;
     public nombreSessionMin: number;
     public nombreSessionMax: number;
     public prix: number;
     public prixMin: number;
     public prixMax: number;

}
