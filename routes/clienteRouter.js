const express = require('express');
const clienteController = require('../controllers/clienteController');

const router = express.Router();

router.post('/', clienteController.criarClientes);
router.get('/', clienteController.listarClientes);
router.get('/cidade/:cidade', clienteController.obterClientesCidade);
router.get('/:id/pedidos', clienteController.pedidoPorId);
router.get('/:id', clienteController.obterClienteId);
router.put('/:id', clienteController.atualizarCliente);
router.post('/:id/pedidos', clienteController.adicionarPedido);
router.delete('/:id', clienteController.removerCliente);

module.exports = router;