import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDescriptionFiveToTask1751010766959 implements MigrationInterface {
    name = 'AddDescriptionFiveToTask1751010766959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "roleName" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_ccf9b0ec984324d7ad5f861a493" FOREIGN KEY ("roleName") REFERENCES "role"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_ccf9b0ec984324d7ad5f861a493"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "roleName"`);
    }

}
