import authRouter from './auth.routes.js'
import usersRouter from './users.routes.js'
import messageRoutes from './messages.routes.js'
import groupesRoutes from './group.routes.js'
import annoncesRoutes from "./annonces.routes.js"
import friendsRoutes from './friends.routes.js'
import commentsRoutes from './comments.routes.js'
import etudiantsRoutes from './etudiants.routes.js'

export default {
  auth: authRouter,
  users: usersRouter,
  messages:messageRoutes,
  groupes: groupesRoutes,
  annonces: annoncesRoutes,
  comments: commentsRoutes,
  friends: friendsRoutes,
  etudiants: etudiantsRoutes,
}
