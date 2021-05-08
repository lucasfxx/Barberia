'use strict'
const Barberreviews = use('App/Models/Barberreview')
class BarberreviewController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Barberreviews.query().paginate(page, perPage)
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

    const Barberreview = await Barberreview.findOrFail(params.id)

    const dados = request.only (['barber_id', 'rate'])
    

    Barberreview.merge(dados)
    Barberreview.save()
  }

  async destroy ({}) {
  }
}

module.exports = BarberreviewController
