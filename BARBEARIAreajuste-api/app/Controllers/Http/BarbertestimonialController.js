'use strict'
const Barbertestimonials = use('App/Models/Barbertestimonial')
class BarbertestimonialController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Barbertestimonials.query().paginate(page, perPage)
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

    const Barbertestimonial = await Barbertestimonial.findOrFail(params.id)

    const dados = request.only (['barber_id', 'name', 'rate', 'body'])
    

    Barbertestimonial.merge(dados)
    Barbertestimonial.save()
  }

  async destroy ({}) {
  }
}

module.exports = BarbertestimonialController
