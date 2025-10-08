import React, { useState } from "react";

function Card({id,name,info,image,price , removetour})
{
     const[readmore,switchlessmore] = useState(false);

    // let description = readmore ? info : '${info.substring(0,200)}'

    const description = readmore ? info :`${info.substring(0,200)}...`;
    
    function handlediscription()
    {
        switchlessmore(!readmore);
    }

   return(
    <div className="card">
        <img src={image} className="cityimage"/>

        <span className="price">₹ {price}</span>

        <span className="cityname">{name}</span>

        <div className="description">{description}<span className="more-less" onClick={handlediscription}>{readmore ? `Show Less`:`Read More`}</span></div>

        <button className="buttonnotintererested" onClick={()=>{removetour(id)}}>Not interested</button>

    </div>
   );
}

export default Card;