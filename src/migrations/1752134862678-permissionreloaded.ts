import { MigrationInterface, QueryRunner } from "typeorm";

export class Permissionreloaded1752134862678 implements MigrationInterface {
    name = 'Permissionreloaded1752134862678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "PK_3b8b97af9d9d8807e41e6f48362"`);
        await queryRunner.query(`ALTER TABLE "permission" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "permission" ADD "roleName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "PK_595ef7f73a1e1276ed5bb5bb7e5" PRIMARY KEY ("roleName")`);
        await queryRunner.query(`ALTER TABLE "permission" ADD "endpointId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "PK_595ef7f73a1e1276ed5bb5bb7e5"`);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "PK_747d5f7bb514db498ee00b937ce" PRIMARY KEY ("roleName", "endpointId")`);
        await queryRunner.query(`ALTER TABLE "permission" ADD "isAllow" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permission" DROP COLUMN "isAllow"`);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "PK_747d5f7bb514db498ee00b937ce"`);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "PK_595ef7f73a1e1276ed5bb5bb7e5" PRIMARY KEY ("roleName")`);
        await queryRunner.query(`ALTER TABLE "permission" DROP COLUMN "endpointId"`);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "PK_595ef7f73a1e1276ed5bb5bb7e5"`);
        await queryRunner.query(`ALTER TABLE "permission" DROP COLUMN "roleName"`);
        await queryRunner.query(`ALTER TABLE "permission" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "PK_3b8b97af9d9d8807e41e6f48362" PRIMARY KEY ("id")`);
    }

}
