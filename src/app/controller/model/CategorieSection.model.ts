import {SectionDto} from './Section.model';
import {SuperCategorieSectionDto} from './SuperCategorieSection.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CategorieSectionDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;
   public numeroOrder: number;
    public numeroOrderMax: string ;
    public numeroOrderMin: string ;
    public superCategorieSection: SuperCategorieSectionDto ;
     public sections: Array<SectionDto>;

}
