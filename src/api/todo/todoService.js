const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true}) // new -> retorna o valor atualizado

module.exports = Todo