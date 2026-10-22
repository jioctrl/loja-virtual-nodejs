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

    const nome = req.body;
    const idade = req.body;
    const cidade = req.body;

    clientes.nome = nome;
    clientes.idade = idade;
    clientes.cidade = cidade;

    res.json({ mensagem: 'Dados atualizados.'});
};

