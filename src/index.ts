// alias
import 'module-alias/register'
import { Application } from '@/core'
const app = new Application({
  prefix: '/api'
})
app.listen(3000, () => {
  console.log('listening on http://localhost:3000')
})