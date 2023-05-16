import {ProfCriteria} from './ProfCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class RecommendTeacherCriteria  extends   BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
     public nombrevote: number;
     public nombrevoteMin: number;
     public nombrevoteMax: number;
    public nom: string;
    public nomLike: string;
    public prenom: string;
    public prenomLike: string;
    public commentaire: string;
    public commentaireLike: string;
    public telephone: string;
    public telephoneLike: string;
    public login: string;
    public loginLike: string;
    public dateRecommamdation: Date;
    public dateRecommamdationFrom: Date;
    public dateRecommamdationTo: Date;
  public prof: ProfCriteria ;
  public profs: Array<ProfCriteria> ;

}
