export class Student {
    id: string;
    active: boolean;
    name: string;
    dateOfBirth: string;

    constructor(id: string,
        active: boolean,
        name: string,
        dateOfBirth: string) {
        this.id = id;
        this.active = active;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
}


