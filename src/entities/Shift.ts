import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn
} from 'typeorm';

@Entity()

export class Shift extends BaseEntity {
    @PrimaryGeneratedColumn()
      id:number;

    @Column()
      startedAt:Date;

    @Column({
      nullable: true
    })
      finishedAt:Date;

    @CreateDateColumn()
      created_at: Date;

    @UpdateDateColumn()
      updated_at: Date;
}
