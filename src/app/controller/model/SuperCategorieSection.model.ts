import {CategorieSectionDto} from './CategorieSection.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class SuperCategorieSectionDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;
     public categorieSections: Array<CategorieSectionDto>;

}
