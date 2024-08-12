import { Bcrypt } from "src/auth/bcrypt/bcrypt";
import { Repository, DeleteResult } from "typeorm";
import { Usuario } from "../entities/usuario.entity";
export declare class UsuarioService {
    private usuarioRepository;
    private bcrypt;
    constructor(usuarioRepository: Repository<Usuario>, bcrypt: Bcrypt);
    findByUsuario(usuario: string): Promise<Usuario | undefined>;
    findByNome(nome: string): Promise<Usuario | undefined>;
    findAll(): Promise<Usuario[]>;
    findById(id: number): Promise<Usuario>;
    create(usuario: Usuario): Promise<Usuario>;
    update(usuario: Usuario): Promise<Usuario>;
    delete(id: number): Promise<DeleteResult>;
}
