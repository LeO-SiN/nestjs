import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { EmployeeModule } from "./employee/employee.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { databaseConfig } from "./database/postgress.config";
import { Middleware2 } from "./middleware/middleware2";
import { middleware1 } from "./middleware/middleware1";


@Module({
    imports:[TypeOrmModule.forRoot(databaseConfig),EmployeeModule]
})

export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(middleware1)
        .forRoutes("*")
        .apply(Middleware2)
        .forRoutes({path:'employee',method: RequestMethod.GET})
    }
}