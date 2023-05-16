import {EtudiantCriteria} from './EtudiantCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ConfirmationTokenCriteria  extends   BaseCriteria  {

    public id: number;
    public token: string;
    public tokenLike: string;
    public expiresAt: Date;
    public expiresAtFrom: Date;
    public expiresAtTo: Date;
    public createdAt: Date;
    public createdAtFrom: Date;
    public createdAtTo: Date;
    public confirmedAt: Date;
    public confirmedAtFrom: Date;
    public confirmedAtTo: Date;
  public etudiant: EtudiantCriteria ;
  public etudiants: Array<EtudiantCriteria> ;

}
