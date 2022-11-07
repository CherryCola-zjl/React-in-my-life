import { Suspense } from "react"
import './App.css';
// router
import { useRoutes } from "react-router-dom";
import routes from '@/routes'
// 跳转页面回到顶部
import ScrollToTop from '@/container/scrollToTop'


function App() {
  const RouteElements = useRoutes(routes)

  // set routerpage header title
  try{
    let cur = RouteElements.props.match.route,
        defaultTitle = 'z',
        setT = ''
    cur.children?(
      setT = cur.children[0]?.meta?.title
    ):(
      setT = cur?.meta?.title
    )
    document.title = setT || defaultTitle
  }catch(e){
    console.log(e)
  }
  return (
    <Suspense fallback={<div></div>}>
    <div className="App">
      <ScrollToTop></ScrollToTop>
      {RouteElements}
    </div>
    </Suspense>
  );
}

export default App;
