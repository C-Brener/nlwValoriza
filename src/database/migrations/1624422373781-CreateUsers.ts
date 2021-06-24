import {MigrationInterface, QueryRunner, Table, Timestamp} from "typeorm";

export class CreateUsers1624422373781 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[ // criando coluna atraves de array
                    {
                        name: "id", // nome da coluna
                        type:"uuid", //id unico e universal
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "password",
                        type:"varchar"
                    },
                    {
                        name: "admin",
                        type:"boolean",
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "Timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "Timestamp",
                        default: "now()"
                    }
                    
                ]


            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
