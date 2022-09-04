import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate} from "react-router-dom";
import "./Search.css";
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Search ( { hideButtons = false }) {
const [{}, dispatch]= useStateValue();
  const [input, setInput] = useState("");  
  const navigate = useNavigate();
  const searching=(e) =>{
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        });

        navigate("/search ");  //when click it goes to search page through useNAvigatore hooks
};

return (
<form className='search'>
<div className='search_input'>
    <SearchIcon className='icon'/>

<input type="text" value={input}  onChange={(e)=> setInput(e.target.value)}  />
      <MicIcon/>
</div>






{!hideButtons ? ( <div className='button' >
    <Button  onClick={searching}   variant="outlined" type="submit"> 
    Google Search  </Button>
    <Button variant="outlined">
     I'm Feeling Lucky  </Button>
</div>
   ):( <div className='button' >
    <Button className='buttonhidden'
     onClick={searching}   variant="outlined" type="submit"> 
    Google Search  </Button>
    <Button  className='buttonhidden'
    variant="outlined">
     I'm Feeling Lucky  </Button>
</div>
   )}
</form>
  )
}

export default Search