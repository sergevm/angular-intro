export class Customer {
    id: number;
    name: string;
    contact?: Contact;
    vat: string;

    constructor(id: number, name: string, vat: string, contact: Contact = null) {
        this.id = id;
        this.name = name;
        this.vat = vat;
        this.contact = contact;
    }
}

export class Contact {
    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() { return `${this.firstName} ${this.lastName}`; }
}