import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, UpdateDateColumn } from 'typeorm';
import { Person } from './utils/Person';
import { Client } from './Client';

@Entity('banker')
export class Banker extends Person {
    @Column({
        unique: true,
        length: 10
    })
    employee_number: string;

    // Llave foranea
    // Client -> Banker => (muchos a muchos)
    @ManyToMany(
        () => Client,
        // Eliminar en cascada
        {
            cascade: false,
        }
    )
    @JoinTable({
        name: 'bankers_clients',
        joinColumn: {
            name: "banker",
            referencedColumnName: "id" // primary key de la table banker
        },
        inverseJoinColumn: {
            name: "client",
            referencedColumnName: "id" // primary key de la table client
        },
    })
    clients: Client[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
};