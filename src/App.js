import React, { useState } from 'react';

import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

function App() {

  const [tags, setTags] = useState([]);

  const handleChange = value => {
    setTags(value);
  }

  return (
    <div className="app">
      <h4>Create a tags input component in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h4>

      <TagsInput
        inputProps={{
          placeholder: 'Enter tags'
        }}
        className='tag-box react-tagsinput'
        maxTags={10}
        value={tags}
        onChange={handleChange} />

      <div>Tags: {tags.join(', ')}</div>
    </div>
  );
}

export default App;