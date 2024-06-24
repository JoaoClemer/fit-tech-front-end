import { ResponseAddressModel } from "../shared/response-address-model";

export class ResponseStudentInformationsModel {
    id:number;
    createDate: Date;
    cpf: string;
    name:string;
    phoneNumber:string;
    emailAddress:string;
    address: ResponseAddressModel;
    registrationNumber:number;

}