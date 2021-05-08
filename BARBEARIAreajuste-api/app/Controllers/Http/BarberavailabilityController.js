'use strict'
const Barberavailabilitys = use('App/Models/Barberavailability')
class BarberavailabilityController {
  async index ({request}) {
    let {page, perPage} = request.all()
    return Barberavailabilitys.query().paginate(page, perPage)
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

    const Barberavailability = await Barberavailability.findOrFail(params.id)

    const dados = request.only (['barber_id', 'weekday', 'hours'])
    

    Barberavailability.merge(dados)
    Barberavailability.save()
  }

  async destroy ({}) {
  }
}

module.exports = BarberavailabilityController
