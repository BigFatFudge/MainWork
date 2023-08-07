import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; 

export const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

let {name, id} = el;

  return (
    
         <tr>
            <td>{el.name}</td>

        {/* <td>Fecha de Documento</td> */}

            <td>
                 {/* <button type="button" className="btn btn-primary">Modificar</button>   */}
                 {/* Modificar tiene que llevar a la pagina de Nico con un useNavigate/Routes */}
                 
                <button className="btn btn-primary btn-sm"> 
                  Editar
                </button>

                <button
                      className="btn btn-primary btn-sm" 
                      onClick={() => deleteData(id)}>
                    Eliminar
                </button>
                 
            </td>
        </tr>
        
    
  )
}
