import {ParcoursCriteria} from './ParcoursCriteria.model';
import {TypeTeacherCriteria} from './TypeTeacherCriteria.model';
import {RecommendTeacherCriteria} from './RecommendTeacherCriteria.model';
import {CategorieProfCriteria} from './CategorieProfCriteria.model';
import {TrancheHoraireProfCriteria} from './TrancheHoraireProfCriteria.model';
import {ClassRoomCriteria} from './ClassRoomCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ProfCriteria  extends   BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public about: string;
    public aboutLike: string;
    public email: string;
    public emailLike: string;
  public parcours: ParcoursCriteria ;
  public parcourss: Array<ParcoursCriteria> ;
  public categorieProf: CategorieProfCriteria ;
  public categorieProfs: Array<CategorieProfCriteria> ;
  public typeTeacher: TypeTeacherCriteria ;
  public typeTeachers: Array<TypeTeacherCriteria> ;
      public trancheHoraireProfs: Array<TrancheHoraireProfCriteria>;
      public classRooms: Array<ClassRoomCriteria>;
      public recommendTeachers: Array<RecommendTeacherCriteria>;

}
