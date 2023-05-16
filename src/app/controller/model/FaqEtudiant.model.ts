import {FaqTypeDto} from './FaqType.model';
import {EtudiantDto} from './Etudiant.model';
import {AdminDto} from './Admin.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class FaqEtudiantDto  extends BaseDto{

    public id: number;
    public description: string;
    public libelle: string;
    public etudiant: EtudiantDto ;
    public admin: AdminDto ;
    public faqType: FaqTypeDto ;

}
