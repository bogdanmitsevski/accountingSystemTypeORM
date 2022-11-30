import {
  BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn
} from 'typeorm';

@Entity()

export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
      id:number;

    @Column()
      email:string;

    @Column()
      password:string;

    @CreateDateColumn()
      created_at: Date;

    @UpdateDateColumn()
      updated_at: Date;
}
