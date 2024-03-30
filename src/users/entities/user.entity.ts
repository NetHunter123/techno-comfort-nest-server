import { Table, Model, Column } from 'sequelize-typescript';


@Table
export class User extends Model {
    @Column
    name: string;

    @Column
    surname: string;

    @Column
    email: string;

    @Column
    password: string;
}
