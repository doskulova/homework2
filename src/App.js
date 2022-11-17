
import AboutUs from './pages/Pages';


function App() {
  const text ={
    title:"hello",
    subtitle:"lorem lorem lorem"
  }
  return (
    <div className="App">
      <AboutUs textInfo={text}/>

    </div>
  );
}

export default App;
