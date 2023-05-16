import {QuizDto} from './Quiz.model';
import {ClassRoomDto} from './ClassRoom.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class QuizClassRoomDto  extends BaseDto{

    public id: number;
    public classRoom: ClassRoomDto ;
    public quiz: QuizDto ;

}
