import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client";

export enum TransactionTypes {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw',
};

@Entity('transactions')
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: TransactionTypes,
    })
    type: string;

    @Column({
        type: "numeric",
    })
    amount: number;

    // Llave foranea
    // Client -> Transaction => (uno a muchos O Muchos a uno)
    @ManyToOne(
        () => Client,
        cliente => cliente.transactions,
        // Para eliminar en cascada
        {
            onDelete: "CASCADE"
        }
    )
    @JoinColumn({
        name: 'client_id'
    })
    client: Client;


};