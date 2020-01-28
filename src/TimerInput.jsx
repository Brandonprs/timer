import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, FormControl, InputLabel, Input,
} from '@material-ui/core';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 5rem;
`;

const TimerInput = ({
  minutes, handleChange, handleSubmit, isCounting,
}) => (
  <StyledForm onSubmit={handleSubmit}>
    <FormControl>
      <InputLabel htmlFor="timer">Countdown (minutes)</InputLabel>
      <Input
        placeholder="5"
        onChange={handleChange}
        id="timer"
        inputProps={{ min: '0' }}
        name="timer"
        type="number"
        value={minutes}
        required
      />
    </FormControl>
    <Button disabled={minutes === 0} style={{ marginLeft: '1rem' }} color="primary" variant="contained" type="submit">
      {isCounting ? 'Clear' : 'Submit'}
    </Button>
  </StyledForm>
);

TimerInput.propTypes = {
  minutes: PropTypes.number,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isCounting: PropTypes.bool,
};

TimerInput.defaultProps = {
  minutes: 0,
  handleChange: () => {},
  handleSubmit: () => {},
  isCounting: false,
};

export default TimerInput;
