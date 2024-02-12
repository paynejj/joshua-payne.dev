import Layout from 'components/layout/Layout'
import { Route } from 'react-router-dom'
import ErrorView from './ErrorView'

const routes = (
  <Route element={<Layout />}>
    <Route
      path="/"
      lazy={() => import('pages/Home')}
      errorElement={<ErrorView />}
    ></Route>
    <Route path="*" lazy={() => import('routes/NotFound')}></Route>
  </Route>
)
export default routes
