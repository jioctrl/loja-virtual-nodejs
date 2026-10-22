const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.post('/', clienteController.criarClientes);
router.get('/clientes', clienteController.listarClientes);
router.get('/clientes/:id', clienteController.obterClienteId);
router.get('/clientes/:id/pedidos', clienteController.pedidoPorId);
router.put('/clientes/:id', clienteController.atualizarCliente);
router.post('/clientes/:id/pedidos', clienteController.adicionarPedido);
router.get('/clientes/cidade/:cidade', clienteController.obterClientesCidade);
router.delete('/clientes/:id', clienteController.removerCliente);

module.exports = router;