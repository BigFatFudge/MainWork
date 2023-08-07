import { CrudTable } from "./components/CrudTable"
import { useEffect, useState } from 'react';

const initialDb = [
    {
        id: 1,
        name: 'Tipo de Documento'  
    },
    {
        id: 2,
        name: 'Fecha de Documento'
    },
    {
        id: 3,
        name: 'Documento Proveedor' 
    },
    {
        id: 4,
        name: 'Documento Interno' 
    },
    {
        id: 5,
        name: 'Moneda Factura' 
    }
]

export const CrudApp = () => {

// Aca hago la table principal para los datos y el boton de DELETE y MODIFICAR.
// Falta hacer el APLICAR. Consultar que entabla hacer eso y la info que tiene que guardar y pasar a la siguiente Pagina. 
// Dentro de <table> voy a llamar al elemento CrudTable y creo que CrudTableRow.
// Seguro en lugar de los tables solo llamaria a CrudTable directo.

// Puede ser deleteColumn tambien.

    const [db, setDb] = useState(initialDb);

    const [dataToEdit, setDataToEdit] = useState(null);


    const deleteData = (id) => {
       let isDelete = window.confirm(`Esta seguro que quiere eliminar la columna ${id}?`);

       if(isDelete) {

            let newData = db.filter(el => el.id !== id);
            setDb(newData);
       } else {
        
            return;
       
        }
    }

    // Consultar la manera para que cuando recargo la pagina, quede borrada la columna,
    // o si esta bien asi.  

    return (
    
        <div>
            <h1 align='center'>Crud E-BP</h1>
         <hr/>
       
         <article className="grid-1-2">
          <CrudTable                
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
          />
        </article>
        <br/>

            <div> 
                <button className="btn btn-primary" >Aplicar</button>
            </div>
           
        </div>
    )
}

