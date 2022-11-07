// lazy load router,can greatly reduce build size
import { lazy } from "react"
// page component
import Pcbox from "@/container/pcbox.jsx"
import Home from "@/view/Home"
const StorePage = lazy(()=> import('@/view/storePage'))

const Routes = [
  {
    path: '/',
    element: <Pcbox/>,
    children: [
      { 
        path: '', 
        element: <Home/>,
        meta:{
          title:'Home'
        } 
      }
    ]
  },
  { 
    path: 'count', 
    element: <StorePage/>,
    meta:{
      title:'count'
  } }
]
export default Routes