import {EtudiantDto} from './Etudiant.model';
import {GroupeEtudiantDto} from './GroupeEtudiant.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class GroupeEtudiantDetailDto  extends BaseDto{

    public id: number;
    public groupeEtudiant: GroupeEtudiantDto ;
    public etudiant: EtudiantDto ;

}
