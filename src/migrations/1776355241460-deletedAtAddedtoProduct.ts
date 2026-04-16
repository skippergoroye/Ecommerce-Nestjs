import { MigrationInterface, QueryRunner } from "typeorm";

export class DeletedAtAddedtoProduct1776355241460 implements MigrationInterface {
    name = 'DeletedAtAddedtoProduct1776355241460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "deletedAt"`);
    }

}
