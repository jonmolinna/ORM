import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, UpdateDateColumn } from 'typeorm';
import { Person } from './utils/Person';
import { Transaction } from './Transaction';
import { Banker } from './Banker';

@Entity('client')
export class Client extends Person {
    @Column({
        type: 'numeric',
    })
    balance: number;

    @Column({
        default: true,
        name: 'active',
    })
    is_active: boolean;

    @Column({
        type: "simple-json",
        nullable: true,
    })
    additional_info: {
        age: number,
        hair_color: string,
    };

    @Column({
        type: "simple-array",
        default: []
    })
    family_members: string[];

    // Llaves Foraneas
    // Client -> Transaction => (uno a muchos O Muchos a uno)
    @OneToMany(
        () => Transaction,
        transaction => transaction.client,
    )
    transactions: Transaction[];

    // Llaves Foraneas
    // Client -> Banker => (muchos a muchos)
    @ManyToMany(
        () => Banker,
        // Eliminar en casacada
        {
            cascade: false,
        }
    )
    bankers: Banker;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
};