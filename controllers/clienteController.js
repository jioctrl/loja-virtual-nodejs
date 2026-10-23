let clientes = [];

exports.criarClientes = (req, res) => {
    clientes.push(req.body);
    res.status(201).json({ mensagem: 'Cliente adicionado com sucesso.' });
};

exports.listarClientes = (req, res) => {
    res.json(clientes);
};

exports.obterClienteId = (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = clientes.find(c => Number(c.id) === id);
    if (cliente) {
        res.json(cliente);
    } else {
        res.status(400).json({ mensagem: 'Cliente não encontrado.' });
    }
};

exports.pedidoPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = clientes.find(c => Number(c.id) === id);
    if (!cliente) {
        return res.status(400).json({ mensagem: 'Cliente não encontrado.'});
    } else {
        res.json(cliente.pedidos);
    }
};

exports.atualizarCliente = (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = clientes.find(c => Number(c.id) === id);
    if (!cliente) {
        return res.status(400).json({ mensagem: 'Cliente não encontrado.'});
    };

    const { nome, idade, cidade } = req.body;

    clientes.nome = nome;
    clientes.idade = idade;
    clientes.cidade = cidade;

    res.json({ mensagem: 'Dados atualizados.'});
};

var pedidos = [];
exports.adicionarPedido = (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = clientes.find(c => Number(c.id) === id);
    if (!clientes) {
        return res.status(400).json({ mensagem: 'Cliente não encontrado.' });
    };

    cliente.pedidos.push(req.body);
    res.json({ mensagem: `Pedido adicionado ao cliente ${cliente.nome}` });
};

exports.obterClientesCidade = (req, res) => {
    const cidade = req.params.cidade;

    const clientesCidade = clientes.filter(c => c.cidade === cidade);

    res.json(clientesCidade);
};

exports.removerCliente = (req, res) => {
    const id = parseInt(req.params.id);
    
    const indice = clientes.findIndex(c => Number(c.id) === id);

    if (indice === -1) {
        return res.status(400).json({ mensagem: 'Cliente não existe.' });
    };

    clientes.splice(indice, 1);

    res.json( {mensagem: 'Cliente removido com sucesso.' });
};