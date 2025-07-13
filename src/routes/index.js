import authRouter from './auth.routes.js'
import usersRouter from './users.routes.js'
import messageRoutes from './messages.routes.js'
import groupesRoutes from './group.routes.js'
import annoncesRoutes from "./annonces.routes.js"

export default {
  auth: authRouter,
  users: usersRouter,
  messages:messageRoutes,
  groupes: groupesRoutes,
  annonces: annoncesRoutes
}
