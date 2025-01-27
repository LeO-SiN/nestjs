import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "./entity/employee.entity";
import { Repository } from "typeorm";

@Injectable()
export class EmployeeService{
    constructor(@InjectRepository(Employee)private employeeRepository:Repository<Employee>){}
    async getAllEmployee(){
        return await this.employeeRepository.find({});
    }
    async getEmployeeById(id:number){
        return await this.employeeRepository.findOne({where:{id}});
    }
    async getEmployeeByEmail(email:string){
        return await this.employeeRepository.findOne({where:{email}});
    }

    async deleteEmployeeById(id:number){
        const emp=await this.getEmployeeById(id);
        emp.statusDelete=true;
        return this.employeeRepository.update(id,emp);
    }
    }