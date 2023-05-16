import {EtudiantDto} from './Etudiant.model';
import {ClassRoomDto} from './ClassRoom.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class EtudiantClassRoomDto  extends BaseDto{

    public id: number;
    public classRoom: ClassRoomDto ;
    public etudiant: EtudiantDto ;

}
