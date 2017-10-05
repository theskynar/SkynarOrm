import { SkynarOrm } from '../index';

export interface IConnectionFactory {

    CreateConnection() : Promise<SkynarOrm.Connection>;
    DestroyConnection() : boolean;
    
}