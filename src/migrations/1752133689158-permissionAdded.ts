import { MigrationInterface, QueryRunner } from "typeorm";

export class PermissionAdded1752133689158 implements MigrationInterface {
    name = 'PermissionAdded1752133689158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "permission" ("id" SERIAL NOT NULL, CONSTRAINT "PK_3b8b97af9d9d8807e41e6f48362" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "permission"`);
    }

}
