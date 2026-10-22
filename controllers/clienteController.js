var clientes = [];

exports.criarClientes = (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const idade = req.body.idade;
    const cidade = req.body.cidade;
    const pedidos = req.body.pedidos || '';

    clientes.push(req.body);
    res.status(201).json({ mensagem: 'Cliente adicionado com sucesso.' });
};

exports.listarClientes = (req, res) => {
    res.json(clientes);
};

exports.obterClienteId = (req, res) => {
    const id = parseInt(req.params.id);
    const clientes = clientes.find(c => c.id === id);
    if (clientes) {
        res.json(clientes);
    } else {
        res.status(400).json({ mensagem: 'Cliente não encontrado.' });
    }
};

exports.pedidoPorId = (res, res) => {
    const id = parseInt(req.params.id);
    const clientes = clientes.find(c => c.id === id);
    if (!clientes) {
        return res.status(400).json({ mensagem: 'Cliente não encontrado.'});
    } else {
        res.json(clientes.pedidos);
    }
};

exports.atualizarCliente = (req, res) => {
    const id = parseInt(req.params.id);
    const clientes = clientes.find(c => c.id === id);
    if (!clientes) {
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
    const clientes = clientes.find(c => c.id === id);
    if (!clientes) {
        return res.status(400).json({ mensagem: 'Cliente não encontrado.' });
    };

    pedidos.push(req.body);
    res.json({ mensagem: `Pedido adicionado ao cliente ${clientes.nome}` });
};

exports.obterClientesCidade = (req, res) => {
    const cidade = req.params.cidade;

    const clientesCidade = clientes.filter(c => c.cidade === cidade);

    res.json(clientesCidade);
};

exports.removerCliente = (req, res) => {
    const id = parseInt(req.params.id);
    
    const indice = clientes.findIndex(c => c.id === id);

    if (indice === -1) {
        return res.status(400).json({ mensagem: 'Cliente não existe.' });
    };

    clientes.splice(indice, 1);

    res.json( {mensagem: 'Cliente removido com sucesso.' });
};