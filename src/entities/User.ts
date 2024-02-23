import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({ type: "text" })
    name: String;

    @Column({ type: "text", unique: true })
    email: String;

    @Column({ type: "text" })
    password: String;
}