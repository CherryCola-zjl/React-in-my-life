import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Home() {
  const state = useSelector(state=>state)
  return (
    <div>
      <Link to="/count">{state.counter.value}</Link>
    </div>
  )
}
