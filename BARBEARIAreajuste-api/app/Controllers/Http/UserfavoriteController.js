'use strict'
const Userfavorites = use('App/Models/Userfavorite')
class UserfavoriteController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Userfavorites.query().paginate(page, perPage)
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

    const Userfavorite = await Userfavorite.findOrFail(params.id)

    const dados = request.only (['usuario_id', 'barber_id'])
    

    Userfavorite.merge(dados)
    Userfavorite.save()
  }

  async destroy ({}) {
  }
}

module.exports = UserfavoriteController
