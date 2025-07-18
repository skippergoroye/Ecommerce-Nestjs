import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSoftDelete1752827516493 implements MigrationInterface {
    name = 'AddSoftDelete1752827516493'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" RENAME COLUMN "isActive" TO "dateDeleted"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "dateDeleted"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "dateDeleted" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "dateDeleted"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "dateDeleted" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "category" RENAME COLUMN "dateDeleted" TO "isActive"`);
    }

}
