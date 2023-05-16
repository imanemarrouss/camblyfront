import {EtudiantDto} from './Etudiant.model';
import {ReponseEtudiantHomeWorkDto} from './ReponseEtudiantHomeWork.model';
import {ResultatHomeWorkDto} from './ResultatHomeWork.model';
import {HomeWorkDto} from './HomeWork.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class HomeWorkEtudiantDto  extends BaseDto{

    public id: number;
    public note: number;
   public dateHomeWork: Date;
    public noteMax: string ;
    public noteMin: string ;
    public dateHomeWorkMax: string ;
    public dateHomeWorkMin: string ;
    public etudiant: EtudiantDto ;
    public homeWork: HomeWorkDto ;
    public resultatHomeWork: ResultatHomeWorkDto ;
     public reponseEtudiantHomeWorks: Array<ReponseEtudiantHomeWorkDto>;

}
