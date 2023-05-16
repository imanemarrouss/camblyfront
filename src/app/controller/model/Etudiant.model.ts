import {ParcoursDto} from './Parcours.model';
import {QuizEtudiantDto} from './QuizEtudiant.model';
import {EtatEtudiantScheduleDto} from './EtatEtudiantSchedule.model';
import {InteretEtudiantDto} from './InteretEtudiant.model';
import {StatutSocialDto} from './StatutSocial.model';
import {LangueDto} from './Langue.model';
import {GroupeEtudeDto} from './GroupeEtude.model';
import {SkillDto} from './Skill.model';
import {FonctionDto} from './Fonction.model';
import {PackStudentDto} from './PackStudent.model';
import {GroupeEtudiantDetailDto} from './GroupeEtudiantDetail.model';
import {TeacherLocalityDto} from './TeacherLocality.model';
import {NiveauEtudeDto} from './NiveauEtude.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class EtudiantDto  extends BaseDto{

    public id: number;
    public ref: string;
    public groupOption: string;
    public email: string;
    public teacherLocality: TeacherLocalityDto ;
    public etatEtudiantSchedule: EtatEtudiantScheduleDto ;
    public parcours: ParcoursDto ;
    public groupeEtude: GroupeEtudeDto ;
    public packStudent: PackStudentDto ;
    public statutSocial: StatutSocialDto ;
    public interetEtudiant: InteretEtudiantDto ;
    public niveauEtude: NiveauEtudeDto ;
    public skill: SkillDto ;
    public fonction: FonctionDto ;
    public langue: LangueDto ;
     public quizEtudiants: Array<QuizEtudiantDto>;
     public groupeEtudiantDetails: Array<GroupeEtudiantDetailDto>;

}
