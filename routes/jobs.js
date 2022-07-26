import express from 'express'
import content from '../middleware/content.js'
import * as upload from '../middleware/upload.js'
import * as auth from '../middleware/auth.js'
import hosts from '../middleware/hosts.js'
import {
  createJob,
  getShownJobs,
  getJob,
  getMyJobs,
  getSearchJobs,
  editJob,
  getHotJobs,
  getLatestJobs
} from '../controllers/jobs.js'

const router = express.Router()

// app.use('/jobs', jobsRouter)
router.post('/', content('multipart/form-data'), auth.jwt, hosts, upload.array, createJob)
router.patch('/:id', content('multipart/form-data'), auth.jwt, hosts, upload.array, editJob)

router.get('/', getShownJobs)
router.get('/my_job', auth.jwt, getMyJobs)
router.get('/search', getSearchJobs)
router.get('/hot', getHotJobs)
router.get('/latest', getLatestJobs)
router.get('/:id', getJob)

export default router
