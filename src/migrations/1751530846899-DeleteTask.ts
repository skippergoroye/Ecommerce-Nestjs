import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteTask1751530846899 implements MigrationInterface {
    name = 'DeleteTask1751530846899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "isActive"`);
    }

}
