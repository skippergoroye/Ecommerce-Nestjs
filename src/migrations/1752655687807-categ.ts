import { MigrationInterface, QueryRunner } from "typeorm";

export class Categ1752655687807 implements MigrationInterface {
    name = 'Categ1752655687807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "slug" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "PK_747d5f7bb514db498ee00b937ce"`);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "PK_595ef7f73a1e1276ed5bb5bb7e5" PRIMARY KEY ("roleName")`);
        await queryRunner.query(`ALTER TABLE "permission" DROP COLUMN "endpointId"`);
        await queryRunner.query(`ALTER TABLE "permission" ADD "endpointId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "PK_595ef7f73a1e1276ed5bb5bb7e5"`);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "PK_747d5f7bb514db498ee00b937ce" PRIMARY KEY ("roleName", "endpointId")`);
        await queryRunner.query(`ALTER TABLE "permission" ALTER COLUMN "isAllow" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "FK_595ef7f73a1e1276ed5bb5bb7e5" FOREIGN KEY ("roleName") REFERENCES "role"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "FK_2322c1314a954fcc73a26c37992" FOREIGN KEY ("endpointId") REFERENCES "endpoint"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "FK_2322c1314a954fcc73a26c37992"`);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "FK_595ef7f73a1e1276ed5bb5bb7e5"`);
        await queryRunner.query(`ALTER TABLE "permission" ALTER COLUMN "isAllow" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "PK_747d5f7bb514db498ee00b937ce"`);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "PK_595ef7f73a1e1276ed5bb5bb7e5" PRIMARY KEY ("roleName")`);
        await queryRunner.query(`ALTER TABLE "permission" DROP COLUMN "endpointId"`);
        await queryRunner.query(`ALTER TABLE "permission" ADD "endpointId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "PK_595ef7f73a1e1276ed5bb5bb7e5"`);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "PK_747d5f7bb514db498ee00b937ce" PRIMARY KEY ("roleName", "endpointId")`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
