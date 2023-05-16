import {HomeWorkEtudiantDto} from './HomeWorkEtudiant.model';
import {HomeWorkQuestionDto} from './HomeWorkQuestion.model';
import {TypeHomeWorkDto} from './TypeHomeWork.model';
import {CoursDto} from './Cours.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class HomeWorkDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public urlImage: string;
    public urlVideo: string;
    public cours: CoursDto ;
    public typeHomeWork: TypeHomeWorkDto ;
     public homeWorkQuestions: Array<HomeWorkQuestionDto>;
     public homeWorkEtudiants: Array<HomeWorkEtudiantDto>;

}
