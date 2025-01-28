import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
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
    @Post()
    createEmployee(@Body() body:any)
    {
      return this.employeeService.createEmployee(body);
    }
    @Patch(":id")
    updateEmployeeById(@Param("id") id:string, @Body() body:any)
    {
        return this.employeeService.updateEmployeeById(parseInt(id),body);
    }

} 