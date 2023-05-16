import {QuizDto} from './Quiz.model';
import {EtudiantDto} from './Etudiant.model';
import {ReponseEtudiantDto} from './ReponseEtudiant.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class QuizEtudiantDto  extends BaseDto{

    public id: number;
    public ref: string;
    public note: number;
    public resultat: string;
   public questionCurrent: number;
    public noteMax: string ;
    public noteMin: string ;
    public questionCurrentMax: string ;
    public questionCurrentMin: string ;
    public etudiant: EtudiantDto ;
    public quiz: QuizDto ;
     public reponseEtudiants: Array<ReponseEtudiantDto>;

}
