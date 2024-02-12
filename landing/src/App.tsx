import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import Loading from 'pages/Loading'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
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
