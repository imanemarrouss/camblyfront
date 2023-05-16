import {EtudiantDto} from './Etudiant.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DictionaryDto  extends BaseDto{

    public id: number;
    public word: string;
    public definition: string;
    public etudiant: EtudiantDto ;

}
