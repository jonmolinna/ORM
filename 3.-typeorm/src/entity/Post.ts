import { Entity, Column, ManyToOne } from "typeorm";
import Model from './Model'
import { User } from "./User";

@Entity("posts")
export class Post extends Model {
    @Column()
    title: string;

    @Column()
    body: string;

    @ManyToOne(() => User)
    user: User;
};


/**-----------------------------------------------------
 
 @Entity("users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column({ type: 'uuid' })
    uuid: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    // Antes de guardar ejecuta esta funcion
    @BeforeInsert()
        createUuid() {
            this.uuid = uuid()
    }

    // Para no exponer algunos campos
    toJSON(){
        return { ...this, id: undefined }
    }

}
 */