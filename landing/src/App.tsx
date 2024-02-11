import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Loading from 'routes/Loading'
import routes from 'routes/Routes'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(routes))

  return <RouterProvider router={router} fallbackElement={<Loading />} />
}

export default App
