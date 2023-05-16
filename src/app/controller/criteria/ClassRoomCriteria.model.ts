import {EtudiantClassRoomCriteria} from './EtudiantClassRoomCriteria.model';
import {QuizClassRoomCriteria} from './QuizClassRoomCriteria.model';
import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ClassRoomCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public description: string;
    public descriptionLike: string;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;
      public etudiantClassRooms: Array<EtudiantClassRoomCriteria>;
      public quizClassRooms: Array<QuizClassRoomCriteria>;

}
