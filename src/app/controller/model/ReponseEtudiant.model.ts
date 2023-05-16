import {QuizEtudiantDto} from './QuizEtudiant.model';
import {QuestionDto} from './Question.model';
import {ReponseDto} from './Reponse.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ReponseEtudiantDto  extends BaseDto{

    public id: number;
    public ref: string;
    public answer: string;
    public note: number;
    public noteMax: string ;
    public noteMin: string ;
    public reponse: ReponseDto ;
    public quizEtudiant: QuizEtudiantDto ;
    public question: QuestionDto ;

}
