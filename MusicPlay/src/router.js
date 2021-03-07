import Player from '@/component/player.vue'
import search from '@/component/search.vue'

const routes = [
  { path: '/player/:id', component: Player, name: 'player' },
  { path: '/', component: search, name: 'search' }
]
export default routes
