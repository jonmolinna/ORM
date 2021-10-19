import { Entity, Column, OneToMany } from "typeorm";
import { Length, IsEmail, IsEnum } from "class-validator";

import Model from './Model';
import { Post } from "./Post";

@Entity("users")
export class User extends Model {
    @Column()
    @Length(1, 255)
    name: string;

    @Column()
    @Length(1, 255)
    @IsEmail()
    email: string;

    @Column({
        type: 'enum',
        enum: ['user', 'admin', 'superadmin'],
        default: 'user'
    })
    @IsEnum(['user', 'admin', 'superadmin'])
    role: string;

    @OneToMany(() => Post, post => post.user)
    posts: Post[];
};