import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

import Button from '../Button/Button.jsx';
import TextInput from '../Input/TextInput.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';

const Form = ({ className, onSubmit, title }) => {
  return (
    <form
      id="article-form"
      className={className}
      onSubmit={onSubmit}
      method="POST"
    >
      <SectionTitle text={title} />
      <div className="pr-requestform-inputs">
        <TextInput
          text="Movie Title"
          label="movie_title"
          type="text"
          id="movie_title"
          value="Enter Movie Title"
        />
        <TextInput
          text="What is your Plex username?"
          label="plex_user"
          type="text"
          id="plex_user"
          value="Plex User"
        />
        <Button />
      </div>
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  title: PropTypes.string.isRequired
};

export default Form;
