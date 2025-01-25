import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "./entity/employee.entity";
import { Repository } from "typeorm";

@Injectable()
export class EmployeeService{
    constructor(@InjectRepository(Employee)private employeeRepository:Repository<Employee>){}
    getAllEmployee(){
        return this.employeeRepository.find({});
    }
}