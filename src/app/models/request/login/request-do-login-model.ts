import { UserType } from "../../enum/user-type";

export class RequestDoLoginModel {
    emailAddress: string;
    password: string;
    userType:UserType
}