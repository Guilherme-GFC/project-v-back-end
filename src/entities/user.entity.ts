import { getRounds, hashSync } from "bcryptjs";
import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { CheckIn } from "./checkin.entity";

@Entity("user")
export class User {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column({ unique: true })
	email!: string;

	@Column({ length: 127 })
	firstName!: string;

	@Column({ length: 127 })
	lastName!: string;

	@Column({ default: false })
	isAdmin!: boolean;

	@Column({ length: 127 })
	password!: string;

	@OneToMany(() => CheckIn, (checkin) => checkin.id)
	checkins!: CheckIn[];

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		const isEncrypted = getRounds(this.password);
		if (!isEncrypted) {
			this.password = hashSync(this.password, 10);
		}
	}
}
