import {ParcoursDto} from './Parcours.model';
import {TypeTeacherDto} from './TypeTeacher.model';
import {RecommendTeacherDto} from './RecommendTeacher.model';
import {CategorieProfDto} from './CategorieProf.model';
import {TrancheHoraireProfDto} from './TrancheHoraireProf.model';
import {ClassRoomDto} from './ClassRoom.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ProfDto  extends BaseDto{

    public id: number;
    public ref: string;
    public about: string;
    public email: string;
    public parcours: ParcoursDto ;
    public categorieProf: CategorieProfDto ;
    public typeTeacher: TypeTeacherDto ;
     public trancheHoraireProfs: Array<TrancheHoraireProfDto>;
     public classRooms: Array<ClassRoomDto>;
     public recommendTeachers: Array<RecommendTeacherDto>;

}
