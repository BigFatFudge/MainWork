import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; 
import { Link } from 'react-router-dom';


export const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

let {name, id} = el;

// const navigate = useNavigate()

  return (
    
         <tr>
            <td>{el.name}</td>

         {/* <td>Fecha de Documento</td>  */}

            <td>

                 {/* <button type="button" className="btn btn-primary">Modificar</button>   
                  Modificar tiene que llevar a la pagina de Nico con un useNavigate/Routes */}
        <div>
            
            <Link to='/Abm/filtros/:names'>
                <button className="btn btn-primary btn-sm"> 
                  Modificar
                </button>
            </Link>

        </div>
            </td>
            <td>
                <button
                    className="btn btn-primary btn-sm " 
                    onClick={() => deleteData(id)}
                >
                  Eliminar
                </button>
              

            </td>
       </tr>
        
    
  )
}


// revisar los TD entre los botones, el original tiene a los dos botones dentro de 1 TD.
