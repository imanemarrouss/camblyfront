import {ParcoursCriteria} from './ParcoursCriteria.model';
import {QuizEtudiantCriteria} from './QuizEtudiantCriteria.model';
import {EtatEtudiantScheduleCriteria} from './EtatEtudiantScheduleCriteria.model';
import {InteretEtudiantCriteria} from './InteretEtudiantCriteria.model';
import {StatutSocialCriteria} from './StatutSocialCriteria.model';
import {LangueCriteria} from './LangueCriteria.model';
import {GroupeEtudeCriteria} from './GroupeEtudeCriteria.model';
import {SkillCriteria} from './SkillCriteria.model';
import {FonctionCriteria} from './FonctionCriteria.model';
import {PackStudentCriteria} from './PackStudentCriteria.model';
import {GroupeEtudiantDetailCriteria} from './GroupeEtudiantDetailCriteria.model';
import {TeacherLocalityCriteria} from './TeacherLocalityCriteria.model';
import {NiveauEtudeCriteria} from './NiveauEtudeCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class EtudiantCriteria  extends   BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public groupOption: string;
    public groupOptionLike: string;
    public email: string;
    public emailLike: string;
  public teacherLocality: TeacherLocalityCriteria ;
  public teacherLocalitys: Array<TeacherLocalityCriteria> ;
  public etatEtudiantSchedule: EtatEtudiantScheduleCriteria ;
  public etatEtudiantSchedules: Array<EtatEtudiantScheduleCriteria> ;
  public parcours: ParcoursCriteria ;
  public parcourss: Array<ParcoursCriteria> ;
  public groupeEtude: GroupeEtudeCriteria ;
  public groupeEtudes: Array<GroupeEtudeCriteria> ;
  public packStudent: PackStudentCriteria ;
  public packStudents: Array<PackStudentCriteria> ;
  public statutSocial: StatutSocialCriteria ;
  public statutSocials: Array<StatutSocialCriteria> ;
  public interetEtudiant: InteretEtudiantCriteria ;
  public interetEtudiants: Array<InteretEtudiantCriteria> ;
  public niveauEtude: NiveauEtudeCriteria ;
  public niveauEtudes: Array<NiveauEtudeCriteria> ;
  public skill: SkillCriteria ;
  public skills: Array<SkillCriteria> ;
  public fonction: FonctionCriteria ;
  public fonctions: Array<FonctionCriteria> ;
  public langue: LangueCriteria ;
  public langues: Array<LangueCriteria> ;
      public quizEtudiants: Array<QuizEtudiantCriteria>;
      public groupeEtudiantDetails: Array<GroupeEtudiantDetailCriteria>;

}
