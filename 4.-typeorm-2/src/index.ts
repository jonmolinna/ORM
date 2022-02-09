import { createConnection } from "typeorm";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transaction } from "./entities/Transaction";
import express from "express";
import { createClientRouter } from "./routes/create_client";
import { createBankerRouter } from "./routes/create_banker";
import { createTransactionRouter } from "./routes/create_transacction";
import { connectBankerToClientRouter } from "./routes/connect_banker_to_client";
import { deleteClientRouter } from './routes/delete_client';
import { fetchClientRouter } from './routes/fetch_clients';

const app = express();

const main = async () => {
    try {
        await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "molina125", // undefined
            database: "typeorm_db_2",
            entities: [Client, Banker, Transaction],
            synchronize: true,
        });

        console.log('Connected to Postgres');

        app.use(express.json());
        app.use(createClientRouter);
        app.use(createBankerRouter);
        app.use(createTransactionRouter);
        app.use(connectBankerToClientRouter);
        app.use(deleteClientRouter);
        app.use(fetchClientRouter);

        app.listen(9000, () => {
            console.log('Now running on port 9000');
        });
        
    } catch (error) {
        console.log(error);
        throw new Error('Unable to connect to DB Postgres')
    }
};

main();