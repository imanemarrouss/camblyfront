import {ParcoursCriteria} from './ParcoursCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class CentreCriteria  extends   BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public libelle: string;
    public libelleLike: string;
    public description: string;
    public descriptionLike: string;
    public log: string;
    public logLike: string;
    public password: string;
    public passwordLike: string;
      public parcourss: Array<ParcoursCriteria>;

}
