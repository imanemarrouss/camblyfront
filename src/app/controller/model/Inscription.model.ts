import {ParcoursDto} from './Parcours.model';
import {QuizDto} from './Quiz.model';
import {SkillDto} from './Skill.model';
import {InteretEtudiantDto} from './InteretEtudiant.model';
import {FonctionDto} from './Fonction.model';
import {EtudiantDto} from './Etudiant.model';
import {EtatInscriptionDto} from './EtatInscription.model';
import {StatutSocialDto} from './StatutSocial.model';
import {PackStudentDto} from './PackStudent.model';
import {GroupeEtudeDto} from './GroupeEtude.model';
import {NiveauEtudeDto} from './NiveauEtude.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class InscriptionDto  extends BaseDto{

    public id: number;
   public numeroInscription: number;
    public noteQuizNiveau: number;
   public quizFinished: null | boolean;
    public dateRegistration: string;
   public datedebutinscription: Date;
   public datefininscription: Date;
    public skype: string;
    public numeroInscriptionMax: string ;
    public numeroInscriptionMin: string ;
    public noteQuizNiveauMax: string ;
    public noteQuizNiveauMin: string ;
    public datedebutinscriptionMax: string ;
    public datedebutinscriptionMin: string ;
    public datefininscriptionMax: string ;
    public datefininscriptionMin: string ;
    public etudiant: EtudiantDto ;
    public etatInscription: EtatInscriptionDto ;
    public parcours: ParcoursDto ;
    public groupeEtude: GroupeEtudeDto ;
    public statutSocial: StatutSocialDto ;
    public interetEtudiant: InteretEtudiantDto ;
    public niveauEtude: NiveauEtudeDto ;
    public fonction: FonctionDto ;
    public quiz: QuizDto ;
    public packStudent: PackStudentDto ;
    public skill: SkillDto ;

}
