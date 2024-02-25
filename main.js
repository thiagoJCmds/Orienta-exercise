function Curso(cargahoraria, modulos, apostilas){
    this.cargahoraria = cargahoraria
    this.modulos = modulos
    this.apostilas = apostilas
    }


function CursoPresencial(cargahoraria, modulos, apostilas ,sala, atendente, banheiro){
    this.sala = sala
    this.atendente = atendente
    this.banheiro = banheiro

    Curso.call(this,cargahoraria, modulos, apostilas);
    }


function CursoOnline(cargahoraria, modulos, apostilas, tutores, site){
      
    this.tutores = tutores
    this.site = site
    
    Curso.call(this ,cargahoraria, modulos, apostilas)
}

const cursoFrontEndPresencial = new CursoPresencial(1000, 40, 40, 8, 2, 2);
const cursoFrontEndOnline = new CursoOnline(1000, 40, 40,"Pedre e João", 1)
console.log(cursoFrontEndPresencial)
console.log(cursoFrontEndOnline)

