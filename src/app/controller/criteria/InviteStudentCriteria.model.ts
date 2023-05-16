import {EtudiantCriteria} from './EtudiantCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class InviteStudentCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public isAccepted: null | boolean;
    public isPaidPack: null | boolean;
    public emailInvited: string;
    public emailInvitedLike: string;
    public dateSentInvitation: Date;
    public dateSentInvitationFrom: Date;
    public dateSentInvitationTo: Date;
    public dateAcceptInvitation: Date;
    public dateAcceptInvitationFrom: Date;
    public dateAcceptInvitationTo: Date;
    public datePayPack: Date;
    public datePayPackFrom: Date;
    public datePayPackTo: Date;
  public etudiant: EtudiantCriteria ;
  public etudiants: Array<EtudiantCriteria> ;

}
