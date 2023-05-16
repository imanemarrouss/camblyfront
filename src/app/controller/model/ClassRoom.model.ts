import {EtudiantClassRoomDto} from './EtudiantClassRoom.model';
import {QuizClassRoomDto} from './QuizClassRoom.model';
import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ClassRoomDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public description: string;
    public prof: ProfDto ;
     public etudiantClassRooms: Array<EtudiantClassRoomDto>;
     public quizClassRooms: Array<QuizClassRoomDto>;

}
