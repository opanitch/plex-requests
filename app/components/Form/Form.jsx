import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

import Button from '../Button/Button.jsx';
import FormTitle from '../Form/FormTitle.jsx';
import TextInput from '../Input/TextInput.jsx';

const Form = ({ className, onSubmit, title }) => {
  return (
    <form
      id="article-form"
      className={className}
      onSubmit={onSubmit}
      method="POST"
    >
      <FormTitle text={title} />
      <div className="pr-requestform-inputs">
        <TextInput
          id="movie_title"
          label="movie_title"
          isRequired="false"
          text="Movie Title"
          type="text"
          value="Enter Movie Title"
        />
        <TextInput
          id="plex_user"
          label="plex_user"
          isRequired="false"
          text="What is your Plex username?"
          type="text"
          value="Plex User"
        />
        <div className="pr-requestform-actions">
          <Button
            type="submit"
            className="pr-button--primary pr-requestform-submit"
            text="Submit Request"
          />
        </div>
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
