import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddPassword1624938687875 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn( // adicionando uma nova coluna na tabela users
            "users", // passando o nome da tabela que será afetada
            new TableColumn({
                name: "password",
                type: "varchar",
                isNullable: true
            })
        ) 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "passaword")
    }

}
