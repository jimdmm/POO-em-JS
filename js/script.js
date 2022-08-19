class Cliente {

    constructor() {
        this.id = 1;
        this.arrayCliente = [];
        this.editId = null;
    }

    salvar() {
        let cliente = this.lerDados();

        if (this.validaCampos(cliente)) {
            if (this.editId == null) {
                this.adicionar(cliente);
            } else {
                this.atualizar(this.editId, cliente);
             }

        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayCliente.length; i++) {
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

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png';
            imgEdit.setAttribute("onclick", "cliente.preparaEditacao(" + JSON.stringify(this.arrayCliente[i]) + ")")

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';
            imgDelete.setAttribute("onclick", "cliente.deletar(" + this.arrayCliente[i].id + ")")

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);



        }
    }

    adicionar(cliente) {
        this.arrayCliente.push(cliente);
        this.id++;
    }

    atualizar(id, cliente) {
        for (let i = 0; i < this.arrayCliente.length; i++) {
            if(this.arrayCliente[i].id == id){
                this.arrayCliente[i].nomeCompleto = cliente.nomeCompleto;
                this.arrayCliente[i].cpf = cliente.cpf;
                this.arrayCliente[i].genero = cliente.genero;
                this.arrayCliente[i].telefone = cliente.telefone;
                this.arrayCliente[i].endereco = cliente.endereco;
                this.arrayCliente[i].observacoes = cliente.observacoes;
            }
        }
    }

    preparaEditacao(dados) {
        this.editId = dados.id;

        document.getElementById('nome').value = dados.nomeCompleto;
        document.getElementById('cpf').value = dados.cpf;
        document.getElementById('genero').value = dados.genero;
        document.getElementById('telefone').value = dados.telefone;
        document.getElementById('endereco').value = dados.endereco;
        document.getElementById('observacoes').value = dados.observacoes;

        document.getElementById('btn1').innerText = 'Atualizar';
    }

    lerDados() {
        let cliente = {}

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

        if (cliente.nomeCompleto == '') {
            msg += '- Informe o nome do Cliente! \n';
        }

        if (cliente.cpf == '') {
            msg += '- Informe o seu CPF! \n';
        }

        if (cliente.telefone == '') {
            msg += '- Informe o número de Telefone! \n';
        }

        if (cliente.endereco == '') {
            msg += '- Informe o seu Endereço! \n';
        }

        if (msg != '') {
            alert(msg);
            return false;
        }
        return true;
    }

    cancelar() {
        document.getElementById('nome').value = '';
        document.getElementById('cpf').value = '';
        document.getElementById('telefone').value = '';
        document.getElementById('endereco').value = '';
        document.getElementById('observacoes').value = '';

        document.getElementById('btn1').innerText = 'Salvar';
        this.editId = null;
    }

    deletar(id) {

        if (confirm('Deseja realmente deletar o cliente?')) {
            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arrayCliente.length; i++) {
                if (this.arrayCliente[i].id == id) {
                    this.arrayCliente.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }

    }
}

var cliente = new Cliente();
