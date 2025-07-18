import { MigrationInterface, QueryRunner } from "typeorm";

export class Isactiveaddtocategory1752823552582 implements MigrationInterface {
    name = 'Isactiveaddtocategory1752823552582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "isActive"`);
    }

}
