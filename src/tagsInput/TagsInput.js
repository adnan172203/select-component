import React from 'react';

const TagsInput = ({ data }) => {
  const [tags, setTags] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [wordEntered, setWordEntered] = React.useState('');

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const addTags = (event) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value]);
      event.target.value = '';
      setWordEntered('');
      setFilteredData('');
    }
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;

    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const addValue = (value) => {
    setTags([...tags, value.title]);
    setWordEntered('');
    setFilteredData('');
  };

  return (
    <>
      <div className='tags-input'>
        <ul id='tags'>
          {tags &&
            tags.map((tag, index) => (
              <li key={index} className='tag'>
                <span className='tag-title'>{tag}</span>
                <span
                  className='tag-close-icon'
                  onClick={() => removeTags(index)}
                >
                  x
                </span>
              </li>
            ))}
        </ul>
        <input
          type='text'
          onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
          placeholder='Press enter to add tags'
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length !== 0 && (
        <div className='dataResult'>
          {filteredData.slice(0, 15).map((value, index) => {
            return (
              <a
                className='dataItem'
                href={value.link}
                onClick={() => addValue(value)}
                key={index}
              >
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TagsInput;
