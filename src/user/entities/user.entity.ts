import { ApiProperty } from "@nestjs/swagger";
import { hashSync } from "bcrypt";
import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ApiProperty({example: 'Alisson', description: 'Nome da Pessoa',})
    @Column()
    name: string;

    @ApiProperty({example: 'alisson@gmail.com', description: 'E-mail utilizado',})
    @Column()
    email: string;

    @ApiProperty({example: '1oR@4L)#uy', description: 'Senha com caracteres e letras maiúsculas e minúsculas',})
    @Column()
    password: string;

    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;

    @DeleteDateColumn()
    deleteAt?: Date;

    @BeforeInsert()
    hashSenha(){
        this.password = hashSync(this.password, 10);
    }
    
}
