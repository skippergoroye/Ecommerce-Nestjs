import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrationforcharacters1753692719765 implements MigrationInterface {
    name = 'Migrationforcharacters1753692719765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "price" numeric(6,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "offerPrice"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "offerPrice" numeric(6,2)`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "shortDescription"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "shortDescription" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "longDescription"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "longDescription" text`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "slug"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "slug" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "slug"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "slug" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "longDescription"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "longDescription" character varying`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "shortDescription"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "shortDescription" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "offerPrice"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "offerPrice" integer`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "name" character varying NOT NULL`);
    }

}
