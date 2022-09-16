import TagsInput from './tagsInput/TagsInput';
import BookData from './data/Data.json';
import './App.css';

function App() {
  return (
    <div className='App'>
      <TagsInput data={BookData} />
    </div>
  );
}

export default App;
