import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class FreeTrialConfigurationDto  extends BaseDto{

    public id: number;
   public dateApplicationDebut: Date;
   public dateApplicationFin: Date;
   public nombreStudentMax: number;
   public nombreStudentMin: number;
    public dateApplicationDebutMax: string ;
    public dateApplicationDebutMin: string ;
    public dateApplicationFinMax: string ;
    public dateApplicationFinMin: string ;
    public nombreStudentMaxMax: string ;
    public nombreStudentMaxMin: string ;
    public nombreStudentMinMax: string ;
    public nombreStudentMinMin: string ;

}
