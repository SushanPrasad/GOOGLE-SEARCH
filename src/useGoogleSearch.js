import {useState, useEffect } from 'react';
import API_KEY from './Keys';

const CONTEXT_KEY = "e697d74df58264d87";

const useGoogleSearch =(term) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                // this connect google search api
            )

        .then(response => response.json())
        .then(result => {
            setData(result)
        })
        }

    fetchData();
        

    }, [term] )  

return { data }  

};

export default useGoogleSearch;
 //term is searchbox were it create datalayer when it hit enter