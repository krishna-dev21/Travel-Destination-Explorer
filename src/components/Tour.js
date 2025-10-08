import React, { useState } from "react";
import Card from "./Card";


function Tour({tours})
{

    const[newtour,setttt]= useState(tours)
     
    function removetour(id)
    {    
        let ccc = newtour.filter(singletour=>singletour.id != id)
        setttt(ccc)
    }

    // if(tours.length == 0)
    //     {
    //       return(
    //         <div className="refreshsection">
    //         <div className="notourlefttext">No Tour Left</div>
    //         <button onClick={()=>setttt(tours)} className="refreshbutton">Refresh</button>
    //       </div>
    //       )
    //     }

     return(
        <div className="wrapper">
            <div className="heading">Plan With Nikhil</div>
            <div className="wholetoursection">
                {
                    newtour.map((singletour)=>(
                         <Card key={singletour.id} {...singletour}
                         removetour={removetour}></Card>
                        
                    ))
                }
            </div>
        </div>
     );
}

export default Tour;