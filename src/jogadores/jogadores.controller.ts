import { Controller, Post } from '@nestjs/common';

@Controller('jogadapi/v1/jogadores')
export class JogadoresController {
  @Post()
  async criarAtualizarJogador() {
    return JSON.stringify({
      nome: 'Diego',
    });
  }
}
