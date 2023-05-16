import {EtudiantDto} from './Etudiant.model';
import {CoursDto} from './Cours.model';
import {ProfDto} from './Prof.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ProfReviewDto  extends BaseDto{

    public id: number;
   public review: number;
    public comment: string;
   public dateReview: Date;
    public reviewMax: string ;
    public reviewMin: string ;
    public dateReviewMax: string ;
    public dateReviewMin: string ;
    public etudiant: EtudiantDto ;
    public prof: ProfDto ;
    public cours: CoursDto ;

}
