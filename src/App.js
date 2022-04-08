import './App.css';
import FullName from './components/profile/FullName.js';
import  Photo   from './components/profile/Photo';
import  Adress from './components/profile/Adress.js';

function App() {
  return (
    <div style={{textAlign:'center',width:'320px',borderRadius: '10px',margin: '10rem' ,marginLeft:'30rem',backgroundColor:'grey',padding:'2rem'}}>
      <Photo/>
      <FullName/>
      <Adress/> 
    </div>
  );
}
export default App;
