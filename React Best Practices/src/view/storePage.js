import {useSelector,useDispatch } from 'react-redux'
import {selectCount,increment, decrement, incrementByAmount, incrementAsync} from '../store/splice/count'

export default function StorePage() {
  const count = useSelector((state) => state.counter.value)
  const count2 = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <div>
      {count}
      <button onClick={()=>dispatch(increment(111))}>+</button>  
      <button onClick={()=>dispatch(decrement())}>-</button>  
      <button onClick={()=>dispatch(incrementByAmount(100))}>aaa</button>  
      <button onClick={()=>dispatch(incrementAsync(1000))}>bbb</button>  
      {count2}
    </div>
  )
}
