import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1663177355025 implements MigrationInterface {
  name = 'initial1663177355025';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "orders" ("order_id" SERIAL NOT NULL, "product_number" integer NOT NULL, "product_description" character varying NOT NULL, "machine_number" integer NOT NULL, "status" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "readed" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_cad55b3cb25b38be94d2ce831db" PRIMARY KEY ("order_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "pallets" ("pallet_id" SERIAL NOT NULL, "amount_boxies" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "readed" integer NOT NULL DEFAULT '0', "order_id" integer NOT NULL, CONSTRAINT "PK_9fc90385c95eb306695fffa13cc" PRIMARY KEY ("pallet_id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "pallets" ADD CONSTRAINT "FK_0386b3c0163aeeee677dcbeb793" FOREIGN KEY ("order_id") REFERENCES "orders"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "pallets" DROP CONSTRAINT "FK_0386b3c0163aeeee677dcbeb793"`,
    );
    await queryRunner.query(`DROP TABLE "pallets"`);
    await queryRunner.query(`DROP TABLE "orders"`);
  }
}
