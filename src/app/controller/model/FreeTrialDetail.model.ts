import {EtudiantDto} from './Etudiant.model';
import {FreeTrialDto} from './FreeTrial.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class FreeTrialDetailDto  extends BaseDto{

    public id: number;
   public presence: null | boolean;
   public whatsUpMessageSent: null | boolean;
   public dateEnvoiwhatsUpMessage: Date;
   public emailMessageSent: null | boolean;
   public dateEnvoiEmailMessage: Date;
   public abonne: null | boolean;
    public dateEnvoiwhatsUpMessageMax: string ;
    public dateEnvoiwhatsUpMessageMin: string ;
    public dateEnvoiEmailMessageMax: string ;
    public dateEnvoiEmailMessageMin: string ;
    public freeTrial: FreeTrialDto ;
    public etudiant: EtudiantDto ;

}
