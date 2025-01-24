import { Injectable } from "@nestjs/common";

@Injectable()
export class EmployeeService{
    getAllEmployee(){
        return "Hi!!";
    }
}