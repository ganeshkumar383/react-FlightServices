import React from 'react';

const KGK = ({title}) => {
  console.log(title); 
  return (<div> <h2>Flight Name :  {title!=undefined?title.airlineName:'Flight 1'}</h2>
  <h2>Flight Number :  {title!=undefined?title.f_number:'000'}</h2>
  <h2>Flight Cost :  {title!=undefined?title.price:'0'}</h2>
  <h2>Image : </h2><img src={title!=undefined?title.image:'image'} alt=''/>
  </div>);
};
export default KGK;