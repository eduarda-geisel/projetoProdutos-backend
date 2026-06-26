const express = require("express");
const { produtos } = require("./data/memory");

router.get(`/produtos`, (req,res) => {
    return res.status(200).json ({
    })
})

router.put(`/produtos`, (req,res) => {
    const { preco, novoPreco } = req.body;

    for (let i = 0; i < todos.length; i++) {
        if (preco === todos[i].preco) {
            todos[i].preco = novoPrecoo;
            return res.status(200).json(todos[i], { mensagem: "Informação atualizada!"})
        } else {
            return res.status(400).json({ mensagem: "Preço não foi encontrado."})
        }
    }
})

router.delete('/produtos', (req, res) => {
    const { nome } = req.body;
    for (let i = 0; i < todos.length; i++) {
        if (nome === todos[i].nome) {
            todos.splice(i, 1)
            return res.status(200).json({ mensagem: "Produto deletada com sucesso!"})
        } else {
            return res.status(400).json({ mensagem: "Algo está certo!"})
        }
    }
})

outer.post('/todos', (req, res) => {
    const { nome, categoria } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "Nome é obrigatório"})
    }

    const novoProduto = {
        id: new Date().toString(),
        nome,
        preco,
        categoria: false
    }

    todos.push(novoProduto)

    res.status(201).json({
        mensagem: "Produto criada com sucesso",
        tarefaCriada: novoProduto
    })
})
