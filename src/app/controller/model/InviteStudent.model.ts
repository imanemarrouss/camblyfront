import {EtudiantDto} from './Etudiant.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class InviteStudentDto  extends BaseDto{

    public id: number;
    public code: string;
   public isAccepted: null | boolean;
   public isPaidPack: null | boolean;
    public emailInvited: string;
   public dateSentInvitation: Date;
   public dateAcceptInvitation: Date;
   public datePayPack: Date;
    public dateSentInvitationMax: string ;
    public dateSentInvitationMin: string ;
    public dateAcceptInvitationMax: string ;
    public dateAcceptInvitationMin: string ;
    public datePayPackMax: string ;
    public datePayPackMin: string ;
    public etudiant: EtudiantDto ;

}
