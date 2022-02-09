import express from 'express';
import { createQueryBuilder } from 'typeorm';
import { Client } from '../entities/Client';

const router = express.Router();

router.get('/api/clients', async (req, res) => {
    const client = await createQueryBuilder(
        'client'
    )
    .select('client') // select('client.first_name') => trae solo nombre
    // .addSelect('client.balance')  => obtenga mas el campo de balance
    // .addSelect('SUM(transaction)', 'sum')
    .from(Client, 'client')
    .leftJoinAndSelect(
        'client.transactions',
        'transactions'
    )
    .where('client.id = :clientId', { clientId: 3 })
    // .where('client.balance >= :balance', { balance: 4000 }) // trae una lista de clientes con balance >= 4000
    // .where('client.balance >= :minBalance AND client.balance <= :maxBalance', { minBalance: 4000, maxBalance: 6000 })
    // .getOne();
    .getMany()

    return res.json(client);

});

export {
    router as fetchClientRouter,
}