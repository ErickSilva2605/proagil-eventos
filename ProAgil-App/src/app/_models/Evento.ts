import { Lote } from './Lote';
import { RedeSocial } from './RedeSocial';
import { Palestrante } from './Palestrante';

export interface Evento {
    id: number;
    local: string;
    data: Date;
    tema: string;
    qtdPessoas: number;
    imagemUrl: string;
    telefone: string;
    email: string;
    lotes: Lote[];
    redeSociais: RedeSocial[];
    palestrantesEventos: Palestrante[];
}