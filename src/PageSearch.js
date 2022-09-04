import React from 'react';
import "./PageSearch.css";

import {Link} from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageIcon from '@mui/icons-material/Image';
import SellIcon from '@mui/icons-material/Sell';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Search from './Search';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';

function PageSearch() {
const [{term}, dispatch] = useStateValue();
const {data} =useGoogleSearch(term);
console.log(data);
  
return (
     <div className='pagesearch'>
      <div className='header'>
              <Link to="/">
                <img src="https://ik.imagekit.io/amazonshop/google-ar21_zEXK7JtKP5.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661167478042" className="logo" alt='' />
              </Link>    
          <div className="body">
          <Search hideButtons />
      <div className='options'>
      
          <div className='optionsleft'>
       
               <div className='searchoption_option'>
         
               <SearchIcon />  <Link to="/all">All</Link>  
               </div>
       
               <div className='searchoption_option'>
              <NewspaperIcon /> <Link to="/news">News</Link>
              </div>
       
       
              <div className='searchoption_option'>
             <ImageIcon /> <Link to="/images">Images</Link>
             </div>
       
             <div className='searchoption_option'>
             <SellIcon /> <Link to="/shopping">Shopping</Link>
             </div>
       
            <div className='searchoption_option'>
            <LocationOnIcon /> <Link to="/maps">Maps</Link>
            </div>
       
           <div className='searchoption_option'>
          <MoreVertIcon /><Link to="/more">More</Link>
          </div>
       
         
          </div>

    <div className='optionsright'>
      <div className='searchoption_option'>
        <Link to="/tool"> Tool </Link>
       </div>
       
       <div className='searchoption_option'>
        <Link to="/setting"> Setting </Link>
       </div>   
     </div>
  </div>
    </div>
    </div>

    {true && (       
      <div className='searchPage_resulting'>
 <p className='resultcount' >
 About  {data?.searchInformation.formattedTotalResults} 
        results ({data?.searchInformation.formattedSearchTime}seconds) for {term}  </p>

{ data?.items.map(item => ( 
    
    <div className='searchPage_result'>
 <a href={item.link}>
        <img className='searchPage_resultImage'
     src={item.pagemap.cse_image?.length > 0 &&
     item.pagemap?.cse_image?.[0]?.src}  alt='search result' />
       
  {item.displayLink} </a>   
 <a className='searchPage_resulttitle'
     href={item.link}>
  
  <h2> {item.title}</h2>
  </a> 

  <p className='snippet'> {item.snippet} </p>
  
    </div>
    ))
       }

    </div>
    )}
  </div>
  )}
  export default PageSearch;









