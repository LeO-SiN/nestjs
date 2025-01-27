import { Controller, Delete, Get, Param } from "@nestjs/common";
import { EmployeeService } from "./employee.service";

@Controller("/employee")
export class EmployeeController{
    constructor(private employeeService:EmployeeService){}
    @Get()
    getAllEmployee(){
        return this.employeeService.getAllEmployee();
    }

    @Get(":id")
    getEmployeeById(@Param("id") id:string){
        return this.employeeService.getEmployeeById(parseInt(id));
    }
         
    @Get("search/:email")
    getEmployeeByEmail(@Param("email") email:string){
    return this.employeeService.getEmployeeByEmail(email);
    }
    
    @Delete(":id")
    deleteEmployeeById(@Param("id") id:string){
        return this.employeeService.deleteEmployeeById(parseInt(id));
    }

} 