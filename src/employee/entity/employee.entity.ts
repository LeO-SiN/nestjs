import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('info')
export class Employee{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    
    @Column()
    email: string
}