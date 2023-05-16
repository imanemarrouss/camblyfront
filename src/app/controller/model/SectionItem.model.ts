import {SectionDto} from './Section.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class SectionItemDto  extends BaseDto{

    public id: number;
    public imageUrl: string;
    public response: string;
    public transcription: string;
    public translation: string;
    public explanation: string;
    public example: string;
    public synonyms: string;
    public section: SectionDto ;

}
