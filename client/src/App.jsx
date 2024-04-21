import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import UserPage from './pages/UserPage'
import PostPage from './pages/PostPage'
import BrowsePage from './pages/BrowsePage'

function App() {
  
  const appRoute = createBrowserRouter([
    {
      path: '/',
      element:<BrowsePage/>,
      children:[
        {
          path: '/',
          element: <LandingPage/>,
        },
        {
          path: '/user',
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
