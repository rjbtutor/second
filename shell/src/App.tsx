import './App.css';
// The remote component provided by gallery
import ProviderButton from 'gallery/button';

const App = () => {
  return (
    <div className='content'>
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <ProviderButton />
      </div>
    </div>
  );
};

export default App;
