import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ handleChecked, isChecked  }) => {
  return (
    <StyledWrapper>
      <label className="checkbox-container">
        <input
          className="custom-checkbox"
          type="checkbox"
          onChange={handleChecked}
          checked={isChecked}
        />
        <span className="checkmark" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .checkbox-container {
    display: inline-block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
  }

  .custom-checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 5px;
    transition: background-color 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 10px;
    top: 6px;
    width: 5px;
    height: 11px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  .custom-checkbox:checked ~ .checkmark {
    background-color: #9E090F;
    box-shadow: 0 3px 7px rgba(33, 150, 243, 0.3);
  }

  .custom-checkbox:checked ~ .checkmark:after {
    display: block;
  }

  @keyframes checkAnim {
    0% {
      height: 0;
    }

    100% {
      height: 10px;
    }
  }

  .custom-checkbox:checked ~ .checkmark:after {
    animation: checkAnim 0.2s forwards;
  }`;

export default Checkbox;
