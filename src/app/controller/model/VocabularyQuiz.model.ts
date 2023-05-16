import {VocabularyDto} from './Vocabulary.model';
import {SectionDto} from './Section.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class VocabularyQuizDto  extends BaseDto{

    public id: number;
    public libelle: string;
   public dateDebut: Date;
   public dateFin: Date;
    public dateDebutMax: string ;
    public dateDebutMin: string ;
    public dateFinMax: string ;
    public dateFinMin: string ;
    public section: SectionDto ;
     public vocabularys: Array<VocabularyDto>;

}
