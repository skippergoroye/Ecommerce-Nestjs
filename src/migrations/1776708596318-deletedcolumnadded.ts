import { MigrationInterface, QueryRunner } from "typeorm";

export class Deletedcolumnadded1776708596318 implements MigrationInterface {
    name = 'Deletedcolumnadded1776708596318'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "deletedDate" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deletedDate"`);
    }

}
