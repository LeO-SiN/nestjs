import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService{
    getInfo(){
        return {
            "data":"abc",
            "message":"Success",
            "status":200
        };
    }
}