class Cliente{

    constructor(){
        this.id = 1;
        this.arrayCliente = [];

    }
    
    salvar(){
        let cliente = this.lerDados();

        if(this.validaCampos(cliente)){
            this.adicionar(cliente);
        }

        this.listaTabela();

    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayCliente.length; i++ ) {
            let tr = tbody.insertRow();
            
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_cpf = tr.insertCell();
            let td_genero = tr.insertCell();
            let td_telefone = tr.insertCell();
            let td_endereco = tr.insertCell();
            let td_observacoes = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayCliente[i].id;
            td_nome.innerText = this.arrayCliente[i].nomeCompleto;
            td_cpf.innerText = this.arrayCliente[i].cpf;
            td_genero.innerText = this.arrayCliente[i].genero;
            td_telefone.innerText = this.arrayCliente[i].telefone;
            td_endereco.innerText = this.arrayCliente[i].endereco;
            td_observacoes.innerText = this.arrayCliente[i].observacoes;
            

        }
    }
  
    adicionar(cliente){
        this.arrayCliente.push(cliente);
        this.id++;
    }

    lerDados(){
        let cliente ={}

        cliente.id = this.id;
        cliente.nomeCompleto = document.getElementById('nome').value;
        cliente.cpf = document.getElementById('cpf').value;
        cliente.genero = document.getElementById('genero').value;
        cliente.telefone = document.getElementById('telefone').value;
        cliente.endereco = document.getElementById('endereco').value;
        cliente.observacoes = document.getElementById('observacoes').value;
        
        return cliente;
    }

    validaCampos(cliente) {
        let msg = '';

        if(cliente.nomeCompleto == ''){
            msg += '- Informe o nome do Cliente! \n';
        }

        if(cliente.cpf == ''){
            msg += '- Informe o seu CPF! \n';
        }

        if(cliente.telefone == ''){
            msg += '- Informe o número de Telefone! \n';
        }

        if(cliente.endereco == ''){
            msg += '- Informe o seu Endereço! \n';
        }
        
        if(msg != ''){
            alert(msg);
            return false;
        }
        return true;
    }

    cancelar(){
    }
}

var cliente = new Cliente();
