import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Loading from 'routes/Loading'
import routes from 'routes/Routes'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(routes))

  return (
    <MantineProvider defaultColorScheme="auto">
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </MantineProvider>
  )
}

export default App
