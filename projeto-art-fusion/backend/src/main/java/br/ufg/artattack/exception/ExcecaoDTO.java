package br.ufg.artattack.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExcecaoDTO {

    @Getter
    boolean erro;

    @Getter
    String mensagem;

    @Getter
    String causa;
    public ExcecaoDTO(Exception e){
        this.mensagem = e.getMessage();
        this.causa = e.getCause()!=null? e.getCause().toString() : e.getClass().getSimpleName();
        this.erro = true;
    }
    public ExcecaoDTO(String mensagem, String causa){
        this.mensagem = mensagem;
        this.causa = causa;
        this.erro = true;
    }
}
