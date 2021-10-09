import React from "react";

interface ComponenteFuncionalProps {
    nombrecientifico: string;
    nombrecomun: string;
    raza: string;
    geografia: string;
}


export const ComponenteFuncional: React.FC<ComponenteFuncionalProps> = ({ nombrecientifico, nombrecomun, raza, geografia }) => {
    return <div >
      <ul>
                <li>Nombre Cientifico: {nombrecientifico}</li>
                <li>Nombre Comun: {nombrecomun}</li>
                <li>Raza: {raza}</li>
                <li>Zona Geografia: {geografia}</li>
            </ul>

    </div>

}


    


