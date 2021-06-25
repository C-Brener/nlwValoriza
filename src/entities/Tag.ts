import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

import { v4 as uuid} from "uuid";

@Entity("tags")
class Tag{

    @PrimaryColumn()
    readonly id: string;
    name:string;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    update_at: Date;

    constructor(){
        if(!this.id){ // Verificando se a requisição esta ou não preenchida
            this.id = uuid();
        }
    }
}

export { Tag }