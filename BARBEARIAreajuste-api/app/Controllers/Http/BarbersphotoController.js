'use strict'
const Barbersphotos = use('App/Models/Barbersphoto')
class BarbersphotoController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Barbersphotos.query().paginate(page, perPage)
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

    const Barbersphoto = await Barbersphoto.findOrFail(params.id)

    const dados = request.only (['barber_id', 'url'])
    

    Barbersphoto.merge(dados)
    Barbersphoto.save()
  }

  async destroy ({}) {
  }
}

module.exports = BarbersphotoController
