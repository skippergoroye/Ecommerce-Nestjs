import { MigrationInterface, QueryRunner } from "typeorm";

export class Endpointentitycreated1751614323750 implements MigrationInterface {
    name = 'Endpointentitycreated1751614323750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "endpoint" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "method" integer NOT NULL, CONSTRAINT "PK_7785c5c2cf24e6ab3abb7a2e89f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "endpoint"`);
    }

}
