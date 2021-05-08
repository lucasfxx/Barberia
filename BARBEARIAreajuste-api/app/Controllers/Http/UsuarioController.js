'use strict'
const Usuarios = use('App/Models/Usuario')
class UsuarioController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Usuarios.query().paginate(page, perPage)
  }
  async create ({}) {
  }

  async store ({}) {
  }

  async show ({}) {
  }

  async edit ({}) {
  }

  async update ({}) {

    const Usario = await Usuario.findOrFail(params.id)

    const dados = request.only (['name', 'avatar', 'email', 'password'])
    

    Usuario.merge(dados)
    Usuario.save()
  }

  async destroy ({}) {
  }
}

module.exports = UsuarioController
