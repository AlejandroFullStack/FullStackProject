import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    priority: string;

    @Column()
    responsible: string;

    @Column({default: false})
    completed: boolean;

    @CreateDateColumn({
        name: 'creation_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
      })
    creationAt: Date;
      
    @UpdateDateColumn({ 
        name: 'updated_at', 
        type: 'timestamptz', 
        default: () => 'CURRENT_TIMESTAMP' 
    })
    updatedAt: Date;

}