import {HoweWorkQSTReponseCriteria} from './HoweWorkQSTReponseCriteria.model';
import {TypeDeQuestionCriteria} from './TypeDeQuestionCriteria.model';
import {HomeWorkCriteria} from './HomeWorkCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class HomeWorkQuestionCriteria  extends   BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public libelle: string;
    public libelleLike: string;
     public numero: number;
     public numeroMin: number;
     public numeroMax: number;
     public pointReponseJuste: number;
     public pointReponseJusteMin: number;
     public pointReponseJusteMax: number;
     public pointReponsefausse: number;
     public pointReponsefausseMin: number;
     public pointReponsefausseMax: number;
  public typeDeQuestion: TypeDeQuestionCriteria ;
  public typeDeQuestions: Array<TypeDeQuestionCriteria> ;
  public homeWork: HomeWorkCriteria ;
  public homeWorks: Array<HomeWorkCriteria> ;
      public howeWorkQSTReponses: Array<HoweWorkQSTReponseCriteria>;

}
