using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos
{
    public class EventoDto
    {
        public int Id { get; set; }
        
        [Required (ErrorMessage="Campo Obrigatório.")]
        [StringLength(100, MinimumLength=3, ErrorMessage="Local é entre 3 e 100 caracteres.")]
        public string Local { get; set; }
        public string Data { get; set; }

        [Required(ErrorMessage="O Tema deve ser preenchido.")]
        public string Tema { get; set; }

        [Range(2, 120000, ErrorMessage="Quantidade de Pessoas é entre 2 e 120000.")]
        public int QtdPessoas { get; set; }
        public string ImagemUrl { get; set; }

        [Phone(ErrorMessage ="O valor informado no campo {0} é invalido")]
        public string Telefone { get; set; }

        [EmailAddress(ErrorMessage ="Informe um e-mail valido")]
        public string Email { get; set; }
        public List<LoteDto> Lotes { get; set; }
        public List<RedeSocialDto> RedeSociais { get; set; }
        public List<PalestranteDto> Palestrantes { get; set; }
    }
}