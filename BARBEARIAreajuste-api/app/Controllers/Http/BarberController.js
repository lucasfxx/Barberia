'use strict'
const barbers = use('App/Models/barber')
class BarberController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return barbers.query().paginate(page, perPage)
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

    const Barber = await Barber.findOrFail(params.id)

    const dados = request.only (['name', 'avatar', 'stars', 'latitude', 'longitude'])
    

    Barber.merge(dados)
    Barber.save()
  }

  async destroy ({}) {
  }
}

module.exports = BarberController
