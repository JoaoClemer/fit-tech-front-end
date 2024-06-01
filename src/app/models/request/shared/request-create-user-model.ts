import { RequestRegisterAddressModel } from "./request-register-address-model";

export class RequestCreateUserModel {
    cpf:string;
    name:string;
    phoneNumber:string;
    emailAddress:string;
    password: string; 
    address: RequestRegisterAddressModel;
    gymId: number
}