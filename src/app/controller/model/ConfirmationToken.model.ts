import {EtudiantDto} from './Etudiant.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ConfirmationTokenDto  extends BaseDto{

    public id: number;
    public token: string;
   public expiresAt: Date;
   public createdAt: Date;
   public confirmedAt: Date;
    public expiresAtMax: string ;
    public expiresAtMin: string ;
    public createdAtMax: string ;
    public createdAtMin: string ;
    public confirmedAtMax: string ;
    public confirmedAtMin: string ;
    public etudiant: EtudiantDto ;

}
