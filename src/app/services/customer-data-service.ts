import { Injectable } from '@angular/core';
import { Customer, Contact } from './../models/customers';

let customers: Customer[] = [
    new Customer(1, 'NMBS', '123455678'),
    new Customer(2, 'Agfa', '234453545')
];

@Injectable()
export class CustomerDataService {
    list(): Promise<Customer[]> { return Promise.resolve(customers) };
}