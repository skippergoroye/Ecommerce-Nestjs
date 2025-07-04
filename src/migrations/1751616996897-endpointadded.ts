import { MigrationInterface, QueryRunner } from "typeorm";

export class Endpointadded1751616996897 implements MigrationInterface {
    name = 'Endpointadded1751616996897'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "endpoint" DROP COLUMN "method"`);
        await queryRunner.query(`ALTER TABLE "endpoint" ADD "method" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "endpoint" DROP COLUMN "method"`);
        await queryRunner.query(`ALTER TABLE "endpoint" ADD "method" integer NOT NULL`);
    }

}
