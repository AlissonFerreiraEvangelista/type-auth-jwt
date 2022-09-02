import { IsEmail, IsString, Matches } from "class-validator";
import { User } from "../entities/user.entity";
import { MessagesHelper } from "../helper/message.helper";
import { RegExHelper } from "../helper/regex.helper";

export class CreateUserDto extends User {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @Matches(RegExHelper.password,{message: MessagesHelper.PASSWORD_VALID})
    password: string; 
    
}
