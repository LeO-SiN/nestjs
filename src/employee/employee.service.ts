import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "./entity/employee.entity";
import { Repository } from "typeorm";

@Injectable()
export class EmployeeService{
    constructor(@InjectRepository(Employee)private employeeRepository:Repository<Employee>){}
    async getAllEmployee(){
        return await this.employeeRepository.find({where:{statusDelete:false}});
    }
    async getEmployeeById(id:number){
        return await this.employeeRepository.findOne({where:{id}});
    }

    async createEmployee(body: any){
        const emp=this.employeeRepository.create(body);
        return this.employeeRepository.save(emp);
    }

    async getEmployeeByEmail(email:string){
        return await this.employeeRepository.findOne({where:{email}});
    }

    async deleteEmployeeById(id:number){
        const emp=await this.getEmployeeById(id);
        emp.statusDelete=true;
        return this.employeeRepository.update(id,emp);
    }
    async updateEmployeeById(id:number, body:any){
        const emp=await this.getEmployeeById(id);
        const{name,email}=body;
        emp.name=name; emp.email=email;
        const result=await this.employeeRepository.update(id,emp);
        if(result.affected==1)
            return {message:"Sucessfully updated"};
        else
        return {message:"unable to connect"};
    }
    }