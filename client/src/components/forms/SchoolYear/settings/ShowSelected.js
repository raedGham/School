import React from 'react';
import { TiDelete } from 'react-icons/ti'
const ShowSelected = ({ coursesTaught, handleRemove }) => {
     return (<>
          <h6> selected</h6>
          <div className='list-group'>

               {coursesTaught.map((s, i) => (<>
                    <li className='list-group-item' key={i} > {s.course} / {s.section}
                         <TiDelete className='text-danger pointer' onClick={() => handleRemove(i)} /> </li>
               </>
               ))}
          </div>

     </>
     );
};

export default ShowSelected;