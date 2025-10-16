import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("checkin")
export class CheckIn {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column({ type: "date" })
	startTime!: string;

	@Column({ type: "date" })
	endTime!: string;

	@Column()
	description!: string;

	@Column()
	location!: string;

	@CreateDateColumn()
	createdAt!: Date;

	@ManyToOne(() => User, (user) => user.checkins)
	user!: User;
}
