import React from 'react';
import { TiDelete } from 'react-icons/ti'
const ShowSelected = ({ coursesTaught, handleRemove }) => {
     return (<>
          <h6> selected</h6>
          <div className='list-group'>

               {coursesTaught.map((s, i) => (<>
                    <li className='list-group-item' key={i} > <span className='text-primary'>{s.course.code}</span> / {s.course.name}  | {s.section.name}
                         <TiDelete className='text-danger pointer' onClick={() => handleRemove(i)} /> </li>
               </>
               ))}
          </div>

     </>
     );
};

export default ShowSelected;