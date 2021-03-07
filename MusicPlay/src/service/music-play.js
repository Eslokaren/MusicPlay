import trae from 'trae'
import confiService from './config'

const musicPlayService = trae.create({
  baseUrl: confiService.apiUrl
})

export default musicPlayService
