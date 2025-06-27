import { MigrationInterface, QueryRunner } from "typeorm";

export class RoleEntityCreated1751008081464 implements MigrationInterface {
    name = 'RoleEntityCreated1751008081464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_ae4578dcaed5adff96595e61660" PRIMARY KEY ("name"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
