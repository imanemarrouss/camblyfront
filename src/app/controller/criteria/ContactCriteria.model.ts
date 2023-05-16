import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ContactCriteria  extends   BaseCriteria  {

    public id: number;
    public name: string;
    public nameLike: string;
    public email: string;
    public emailLike: string;
    public phone: string;
    public phoneLike: string;
    public setFrom: string;
    public setFromLike: string;
    public dateContact: Date;
    public dateContactFrom: Date;
    public dateContactTo: Date;
    public replied: null | boolean;
    public message: string;
    public messageLike: string;

}
