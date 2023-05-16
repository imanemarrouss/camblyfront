import {SectionCriteria} from './SectionCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class SectionItemCriteria  extends   BaseCriteria  {

    public id: number;
    public imageUrl: string;
    public imageUrlLike: string;
    public response: string;
    public responseLike: string;
    public transcription: string;
    public transcriptionLike: string;
    public translation: string;
    public translationLike: string;
    public explanation: string;
    public explanationLike: string;
    public example: string;
    public exampleLike: string;
    public synonyms: string;
    public synonymsLike: string;
  public section: SectionCriteria ;
  public sections: Array<SectionCriteria> ;

}
