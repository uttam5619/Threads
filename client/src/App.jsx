import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import UserPage from './pages/UserPage'
import PostPage from './pages/PostPage'
import BrowsePage from './pages/BrowsePage'
import HomePage from './pages/HomePage'

function App() {
  
  const appRoute = createBrowserRouter([
    {
      path: '/auth',
      element: <LandingPage />
    },
    {
      path: '/',
      element:<BrowsePage/>,
      children:[
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/profile/:id',
          element: <UserPage/>,
        },
        {
          path: '/user/post/:postId',
          element: <PostPage/>
        }
      ]
    },
  ])

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  )
}

export default App
