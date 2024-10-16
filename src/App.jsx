import { Container, Row } from 'react-bootstrap';
import './App.css';
import MyCard from './components/Card';
import MyNav from './components/Navbar';

function App() {
  return (
    <>
        <MyNav />
        <main>
          <div className='grid-min-250'>
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
          </div>
        </main>
    </>
  );
}

export default App;
