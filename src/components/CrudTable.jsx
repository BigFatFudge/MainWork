import React from 'react'
import { CrudTableRow } from './CrudTableRow'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; 


export const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div>
        <h2>Tabla Datos/Columnas</h2>
    <div className='containerOptions'>
        <table>
            <thead>
                <tr>
                    <th>Columnas</th>
                    <th>Acciones</th>
                </tr>
            </thead>
       
            <tbody>
               {data.length === 0 ? (
                 <tr>
                    <td colSpan="3">Sin Datos</td>
                 </tr>
               ) : (
                data.map((el) => <CrudTableRow                                     
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
  )
}
