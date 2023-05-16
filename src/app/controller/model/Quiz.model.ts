import {QuizEtudiantDto} from './QuizEtudiant.model';
import {QuestionDto} from './Question.model';
import {SectionDto} from './Section.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class QuizDto  extends BaseDto{

    public id: number;
    public ref: string;
    public lib: string;
   public dateDebut: Date;
   public dateFin: Date;
   public numero: number;
   public seuilReussite: number;
    public dateDebutMax: string ;
    public dateDebutMin: string ;
    public dateFinMax: string ;
    public dateFinMin: string ;
    public numeroMax: string ;
    public numeroMin: string ;
    public seuilReussiteMax: string ;
    public seuilReussiteMin: string ;
    public section: SectionDto ;
     public questions: Array<QuestionDto>;
     public quizEtudiants: Array<QuizEtudiantDto>;

}
