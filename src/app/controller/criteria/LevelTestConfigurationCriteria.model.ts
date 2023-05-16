import {ParcoursCriteria} from './ParcoursCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class LevelTestConfigurationCriteria  extends   BaseCriteria  {

    public id: number;
     public noteMin: number;
     public noteMinMin: number;
     public noteMinMax: number;
     public noteMax: number;
     public noteMaxMin: number;
     public noteMaxMax: number;
  public parcours: ParcoursCriteria ;
  public parcourss: Array<ParcoursCriteria> ;

}
