export interface Propriedade {
    id_propriedade:     number
    txt_descricao:      string
    idt_tipo:           'T'|'I'|'R'|'C'|'D'
}

export type Propriedades = Propriedade[]