import {useSelector,useDispatch} from 'react-redux'
// import Count from '../Reducer/Count'
import {Increment ,Decrement} from '../Action/action'

    const Getstore = (props) =>{
    
    const data = useSelector((state)=>state.Count)

    const dispatch = useDispatch();
    
    return (
        <div>
            <button onClick={() => dispatch(Increment(5)) } >Inc</button>
             <div> {data} </div>
             {data === 0 ? <button type='hidden' hidden> Dec</button> :
            <button onClick={() =>dispatch(Decrement(2))}>Dec</button>}
            </div>
    )
}
export default Getstore;