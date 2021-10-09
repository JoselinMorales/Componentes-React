import React from 'react';
import { ComponenteClase } from './ComponenteClase';
import { ComponenteFuncional } from './ComponenteFuncional';
import './Styles.css';

const App: React.FC = () => {
  const users = [{ nombrecientifico: 'Panthera leo', nombrecomun: 'León', raza: 'León de Katanga', geografia: 'África, Manglares, Selvas Tropicales' }]
  const users2 = [{ nombrecientifico: 'Spheniscidae', nombrecomun: 'Pingüino', raza: 'Pingüino rey', geografia: 'Chile, islas de América del Sur y África' }]
  const users3 = [{ nombrecientifico: 'Elephantidae', nombrecomun: 'Elefante', raza: 'Elefante de Sri Lanka.', geografia: 'Malasia, Indonesia, Tailandia y Vietnam' }]
  return <div>
    <div className='card'>
      <img src='https://www.euroresidentes.com/suenos/img_suenos/leon-suenos-euroresidentes.jpg' alt='León' />
      <div className='content'>
        <h2>León</h2>
        {users.map((user) => <ComponenteClase key={user.nombrecientifico} nombrecientifico={user.nombrecientifico} nombrecomun={user.nombrecomun} raza={user.raza} geografia={user.geografia} />)}
      </div>
    </div>
    <br />
    <div className='card'>
      <img src='https://cdn.download.ams.birds.cornell.edu/api/v1/asset/113557631/1800' alt='Pingüino' />
      <div className='content'>
        <h2>Pingüino</h2>
        {users2.map((user2) => <ComponenteFuncional key={user2.nombrecientifico} nombrecientifico={user2.nombrecientifico} nombrecomun={user2.nombrecomun} raza={user2.raza} geografia={user2.geografia} />)}
      </div>
    </div>
    <div className='card'>
      <img src='https://img1.viajar.elperiodico.com/c9/2f/d6/elefantes-650x436.jpg' alt='Elefante' />
      <div className='content'>
        <h2>Elefante</h2>
        {users3.map((user3) => <ComponenteFuncional key={user3.nombrecientifico} nombrecientifico={user3.nombrecientifico} nombrecomun={user3.nombrecomun} raza={user3.raza} geografia={user3.geografia} />)}
      </div>
    </div>
  </div>

}
//<ComponenteClase nombrecientifico={'Panthera leo'} nombrecomun={'León'} raza={'León de Katanga'} geografia={'África, Manglares, Selvas Tropicales'}/>
//<ComponenteFuncional nombrecientifico={'Panthera leo'} nombrecomun={'León'} raza={'León de Katanga'} geografia={'África, Manglares, Selvas Tropicales'}/>

export default App;

