import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("opportunitie")
export class Opportunitie {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column()
	title!: string;

	@Column()
	description!: string;

	@Column()
	contact!: string;

	@Column()
	workplace!: string;

	@Column({ type: "date" })
	deadline!: string;

	@Column({ type: "array", nullable: true })
	expectations!: string[];
}
