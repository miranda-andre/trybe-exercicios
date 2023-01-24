import './App.css';
import { ImageClass, ImageFunction } from './Image';
import cuteCat from './img/cutecat.jpg';

function App() {
  const URL = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
  return (
    <main>
      <ImageClass className="imageSize" source={URL} alternativeText="Cute cat staring" />
      <ImageClass className="imageSize" source={cuteCat} alternativeText="Cute cat staring" />
      
      <ImageFunction className="imageSize" source={cuteCat} alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;
