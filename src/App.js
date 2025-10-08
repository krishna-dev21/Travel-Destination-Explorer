import React, { useState } from "react";
import data from './data';
import Tour from './components/Tour';


const App = () => {

  // const [tours,settour] = useState(data)
   
  // function removetour(id)
  // {
  //   const newtour = tours.filter(tour => tour.id !== id)
  //   settour(newtour);
  // }

  // if(tours.length == 0)
  // {
  //   return(
  //     <div className="refreshsection">
  //     <div className="notourlefttext">No Tour Left</div>
  //     <button onClick={()=>settour(data)} className="refreshbutton">Refresh</button>
  //   </div>
  //   )
  // }

  return (
    // <Tour tours={tours} removetour={removetour}></Tour>
    <Tour tours={data}></Tour>

  );
};

export default App;
