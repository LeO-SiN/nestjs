import { BadRequestException, createParamDecorator, ExecutionContext } from "@nestjs/common";


export const EmailParam=createParamDecorator((data: unknown,ctx: ExecutionContext)=>{
    const request=ctx.switchToHttp().getRequest();
    const email=request.params.email;

    const emailRegex=/^[a-z0-9_.-]+@[a-z]+\.[a-z]+$/;
    if(!emailRegex.test(email))
        throw new BadRequestException("Invalid Email Format");
    return email;
})