import React from "react";
import './Styles.css';

interface ComponenteClaseProps {
    nombrecientifico: string;
    nombrecomun: string;
    raza: string;
    geografia: string;
}

interface ComponenteClaseState {
	count: number;
}


export class ComponenteClase extends React.Component<ComponenteClaseProps, ComponenteClaseState > {
    state: ComponenteClaseState ={
        count: 0,
    }

    componentDidUpdate(){
        if(this.state.count + 1){
			alert('1 Like');
		}
    }

    increment = (count:number) => {
		this.setState((previosState)=>({count:previosState.count + count}));
	}

    render() {
        const { nombrecientifico, nombrecomun, raza, geografia } = this.props
        
        return <div >
            <ul>
                <li>Nombre Cientifico: {nombrecientifico}</li>
                <li>Nombre Comun: {nombrecomun}</li>
                <li>Raza: {raza}</li>
                <li>Zona Geografia: {geografia}</li>
            </ul>
            <br/>
            <button className='button' onClick={()=>this.increment(1)}>Like</button>
        </div>
       
    }


}
