import { Connection } from 'typeorm';

export interface IConnectionFactory {

    CreateConnection() : Promise<Connection>;
    DestroyConnection() : boolean;
    
}