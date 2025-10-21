import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatedEntities1761056343577 implements MigrationInterface {
    name = 'CreatedEntities1761056343577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "checkin" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "startTime" date NOT NULL, "endTime" date NOT NULL, "description" character varying NOT NULL, "location" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_ceddab0cc0235c228a841bac49e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "firstName" character varying(127) NOT NULL, "lastName" character varying(127) NOT NULL, "isAdmin" boolean NOT NULL DEFAULT false, "password" character varying(127) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "opportunitie" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "contact" character varying NOT NULL, "workplace" character varying NOT NULL, "deadline" date NOT NULL, "expectations" character varying, CONSTRAINT "PK_7cb592c87482aafb6bfda91e925" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "checkin" ADD CONSTRAINT "FK_f0e7ca175107dbc1be7f0540a1e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "checkin" DROP CONSTRAINT "FK_f0e7ca175107dbc1be7f0540a1e"`);
        await queryRunner.query(`DROP TABLE "opportunitie"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "checkin"`);
    }

}
