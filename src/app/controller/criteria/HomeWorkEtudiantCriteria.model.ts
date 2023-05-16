import {EtudiantCriteria} from './EtudiantCriteria.model';
import {ReponseEtudiantHomeWorkCriteria} from './ReponseEtudiantHomeWorkCriteria.model';
import {ResultatHomeWorkCriteria} from './ResultatHomeWorkCriteria.model';
import {HomeWorkCriteria} from './HomeWorkCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class HomeWorkEtudiantCriteria  extends   BaseCriteria  {

    public id: number;
     public note: number;
     public noteMin: number;
     public noteMax: number;
    public dateHomeWork: Date;
    public dateHomeWorkFrom: Date;
    public dateHomeWorkTo: Date;
  public etudiant: EtudiantCriteria ;
  public etudiants: Array<EtudiantCriteria> ;
  public homeWork: HomeWorkCriteria ;
  public homeWorks: Array<HomeWorkCriteria> ;
  public resultatHomeWork: ResultatHomeWorkCriteria ;
  public resultatHomeWorks: Array<ResultatHomeWorkCriteria> ;
      public reponseEtudiantHomeWorks: Array<ReponseEtudiantHomeWorkCriteria>;

}
