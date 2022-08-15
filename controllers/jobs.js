import jobs from '../models/jobs.js'
import hosts from '../models/hosts.js'

export const createJob = async (req, res) => {
  try {
    const result = await jobs.create({
      host: req.user._id,
      title: req.body.title,
      city: req.body.city,
      district: req.body.district,
      address: req.body.address,
      zipcode: req.body.zipcode,
      date_from: req.body.date_from,
      date_to: req.body.date_to,
      description: req.body.description,
      photos: req.file?.path || '',
      welfare: req.body.welfare,
      week_hours: req.body.week_hours,
      is_shown: req.body.is_shown
    })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    console.log(error)
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      return res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}
