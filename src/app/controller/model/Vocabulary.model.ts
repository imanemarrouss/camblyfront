import {VocabularyQuizDto} from './VocabularyQuiz.model';
import {SectionDto} from './Section.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class VocabularyDto  extends BaseDto{

    public id: number;
    public ref: string;
   public numero: number;
    public word: string;
    public libelle: string;
    public result: string;
    public explication: string;
    public exemple: string;
    public image: string;
    public numeroMax: string ;
    public numeroMin: string ;
    public section: SectionDto ;
    public vocabularyQuiz: VocabularyQuizDto ;

}
