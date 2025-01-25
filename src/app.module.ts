import { Module } from "@nestjs/common";
import { EmployeeModule } from "./employee/employee.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { databaseConfig } from "./database/postgress.config";


@Module({
    imports:[TypeOrmModule.forRoot(databaseConfig),EmployeeModule]
})

export class AppModule {}