import musicPlayService from './music-play'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  return musicPlayService.get('/search', {
    params: { q, type }
  })
    .then(res => res.data)
}

trackService.getById = function (id) {
  return musicPlayService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
