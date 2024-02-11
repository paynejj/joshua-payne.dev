import Layout from 'components/layout/Layout'
import Home from 'pages/Home'
import { Route } from 'react-router-dom'
import ErrorView from './ErrorView'
import NotFound from './NotFound'

const routes = (
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} errorElement={<ErrorView />}></Route>
    <Route path="*" element={<NotFound />}></Route>
  </Route>
)
export default routes
