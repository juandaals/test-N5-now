import React from "react";

export const home = (props ) => {
  return (
    <div className="row">
      <div className="col">
          {
            props?.map( (item, index) => (
                  <div key={index} className='col' >  
                  <div>
                    <img src={item.image}/>
                  </div>
                  </div>
            )) 
          }
      </div>
    </div>
  );
};
