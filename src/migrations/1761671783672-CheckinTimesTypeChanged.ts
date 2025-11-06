import { MigrationInterface, QueryRunner } from "typeorm";

export class CheckinTimesTypeChanged1761671783672 implements MigrationInterface {
    name = 'CheckinTimesTypeChanged1761671783672'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "checkin" DROP COLUMN "startTime"`);
        await queryRunner.query(`ALTER TABLE "checkin" ADD "startTime" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "checkin" DROP COLUMN "endTime"`);
        await queryRunner.query(`ALTER TABLE "checkin" ADD "endTime" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "checkin" DROP COLUMN "endTime"`);
        await queryRunner.query(`ALTER TABLE "checkin" ADD "endTime" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "checkin" DROP COLUMN "startTime"`);
        await queryRunner.query(`ALTER TABLE "checkin" ADD "startTime" date NOT NULL`);
    }

}
