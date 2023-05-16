import {EtatReponseCriteria} from './EtatReponseCriteria.model';
import {QuestionCriteria} from './QuestionCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ReponseCriteria  extends   BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public lib: string;
    public libLike: string;
     public numero: number;
     public numeroMin: number;
     public numeroMax: number;
  public etatReponse: EtatReponseCriteria ;
  public etatReponses: Array<EtatReponseCriteria> ;
  public question: QuestionCriteria ;
  public questions: Array<QuestionCriteria> ;

}
