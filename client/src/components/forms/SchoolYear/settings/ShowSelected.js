import React from 'react';

const ShowSelected = ({coursesTaught}) => {
    return (<>
          <h6> selected</h6>
        <div className='list-group'>
           
        {    coursesTaught.map((s, i) => (
             <li className='list-group-item' key = {i} > {s.course}  {s.section} </li>
        )) }
         </div>

         </>
    );
};

export default ShowSelected;