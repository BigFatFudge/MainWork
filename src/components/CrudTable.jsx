import React from 'react'
import { CrudTableRow } from './CrudTableRow'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; 


export const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div>
        <h3 justify-content='center'>Tabla Datos/Columnas</h3>
         <div className='border border-primary w-75 my-table text-center element'> 
            <div className='container row justify-content-md-center d-flex'>
              <table>
                <thead>
                  <tr>
                      <th align-text="center">Columnas</th>
                      <th align-text="center">Acciones</th>                  
                  {/* medio raro ese style */}                  
                  </tr>
                </thead>
       
                <tbody>
                    {data.length === 0 ? (
                   <tr>
                      <td colSpan="3">Sin Datos</td>
                   </tr>
                  ) : (
                   data.map((el) =>
                    <CrudTableRow                                     
                            key={el.id} 
                            el={el} 
                            setDataToEdit={setDataToEdit} 
                            deleteData={deleteData}
                    />
                        )
                    )
                  }
                </tbody>

              </table>
            </div> 
          </div>
      </div>

  )
}
