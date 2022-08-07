
import {NewsContextProvider} from './NewsContext';
import './App.css';
import News from './Components/News/News';

function App() {
  return (
    
   <NewsContextProvider>
    <News/>
   </NewsContextProvider>
    
  );
}

export default App;
