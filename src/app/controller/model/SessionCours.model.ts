import {SalaryDto} from './Salary.model';
import {GroupeEtudiantDto} from './GroupeEtudiant.model';
import {SectionDto} from './Section.model';
import {CoursDto} from './Cours.model';
import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class SessionCoursDto  extends BaseDto{

    public id: number;
    public reference: string;
    public duree: number;
    public totalheure: number;
    public mois: number;
    public annee: number;
   public dateFin: Date;
   public dateDebut: Date;
   public payer: null | boolean;
    public dureeMax: string ;
    public dureeMin: string ;
    public totalheureMax: string ;
    public totalheureMin: string ;
    public moisMax: string ;
    public moisMin: string ;
    public anneeMax: string ;
    public anneeMin: string ;
    public dateFinMax: string ;
    public dateFinMin: string ;
    public dateDebutMax: string ;
    public dateDebutMin: string ;
    public prof: ProfDto ;
    public cours: CoursDto ;
    public groupeEtudiant: GroupeEtudiantDto ;
    public salary: SalaryDto ;
     public sections: Array<SectionDto>;

}
