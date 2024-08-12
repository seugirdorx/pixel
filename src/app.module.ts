import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { PostagemModule } from './postagem/postagem.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Postagem } from './postagem/entities/postagem.entity';
import { Usuario } from './usuario/entities/usuario.entity';

@Module({
      imports: [

  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_pixelart',
    entities: [Postagem, Usuario],
    synchronize: true
  }),

  // TypeOrmModule.forRoot({
  //   type: 'postgres',
  //   url: process.env.DATABASE_URL,
  //   logging: false,
  //   dropSchema: false,
  //   ssl: {
  //     rejectUnauthorized: false
  //   },
  //   synchronize: true,
  //   autoLoadEntities: true,
  //  }),
  
    PostagemModule,
    UsuarioModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
