import './App.css';
import WholeList from './components/list/list';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/list/listStyles.css'
import HeaderSection from './components/header/header'
import './components/header/headerStyles.css'

function App() {
  return (
    <section className="App">
      <HeaderSection />
      <WholeList />
    </section>
  );
}

export default App;
