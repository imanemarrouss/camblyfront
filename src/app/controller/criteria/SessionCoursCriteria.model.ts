import {SalaryCriteria} from './SalaryCriteria.model';
import {GroupeEtudiantCriteria} from './GroupeEtudiantCriteria.model';
import {SectionCriteria} from './SectionCriteria.model';
import {CoursCriteria} from './CoursCriteria.model';
import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class SessionCoursCriteria  extends   BaseCriteria  {

    public id: number;
    public reference: string;
    public referenceLike: string;
     public duree: number;
     public dureeMin: number;
     public dureeMax: number;
     public totalheure: number;
     public totalheureMin: number;
     public totalheureMax: number;
     public mois: number;
     public moisMin: number;
     public moisMax: number;
     public annee: number;
     public anneeMin: number;
     public anneeMax: number;
    public dateFin: Date;
    public dateFinFrom: Date;
    public dateFinTo: Date;
    public dateDebut: Date;
    public dateDebutFrom: Date;
    public dateDebutTo: Date;
    public payer: null | boolean;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;
  public cours: CoursCriteria ;
  public courss: Array<CoursCriteria> ;
  public groupeEtudiant: GroupeEtudiantCriteria ;
  public groupeEtudiants: Array<GroupeEtudiantCriteria> ;
  public salary: SalaryCriteria ;
  public salarys: Array<SalaryCriteria> ;
      public sections: Array<SectionCriteria>;

}
