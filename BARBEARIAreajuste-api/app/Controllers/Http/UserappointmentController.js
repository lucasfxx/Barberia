'use strict'
const Userappointments = use('App/Models/Userappointment')
class UserappointmentController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Userappointments.query().paginate(page, perPage)
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

    const Userappointment = await Userappointment.findOrFail(params.id)

    const dados = request.only (['usuario_id', 'barber_id', 'ap_datetime'])
    

    Userappointment.merge(dados)
    Userappointment.save()
  }

  async destroy ({}) {
  }
}
module.exports = UserappointmentController
