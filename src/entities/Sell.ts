import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class Sell extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    shiftId:number;

    @Column()
    itemId:number;

    @Column()
    price:number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}


