import React from 'react';

const PlanBox = ({ plan }) => {
  return (
    <div className="plan-box bg-black ">
      <h3 className='text-2xl font-normal  font-poppins'>{plan.title}</h3>
      <p className="plan-description text-sm text-gray-400">{plan.description}</p>
      <h2 className='text-4xl font-medium  tracking-tight'>{plan.price}</h2>
      <ul style={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
        {plan.features.map((feature, index) => (
          <li key={index} style={{padding:"10px"}}>🗸 {feature}</li>
        ))}
      </ul>
     
      <div > <button style={{alignItems:"flex-end"}} className='inline-flex justify-center w-full max-w-xs bottom-10  px-4 py-2 transition-colors border rounded-full focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 '>Select Plan</button></div>
    </div>
  );
};

export default PlanBox;
