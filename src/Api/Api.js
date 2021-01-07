const API_KEY="o82xyf9PP7YuP3q95eCsE9D5xnw2";

//get the all maches [up coming matches]

export const getMatches=()=>{
    const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log('ERROR :', error));

};

//load match details

export const getMatchdetail = (id) =>{
    const url=`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log('ERROR :', error));
    
};