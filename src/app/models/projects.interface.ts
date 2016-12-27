import {Customer} from './customers';

export interface Project {
    id: number,
    name: string,
    customer?: Customer
}