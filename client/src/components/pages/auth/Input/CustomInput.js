import React, { useState, useEffect } from "react";
import "./CustomInput.css";

const CustomInput = React.memo(
  ({
    value,
    label,
    inputRef,
    name,
    type,
    onChange,
    error,
    description,
    maxLength,
    test,
    testError,
    id,
  }) => {
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
      setIsFilled(!!value);
    }, [value]);

    const handleClearInput = () => {
      onChange("");
      setIsFilled(false);
    };

    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      onChange(inputValue);
      setIsFilled(!!inputValue);
    };

    return (
      <div>
        <label className='inp'>
          <input
            type={type}
            value={value}
            name={name}
            id={name}
            ref={inputRef}
            placeholder="&nbsp;"
            onChange={handleInputChange}
            maxLength={maxLength}
            data-testid={test ? test : undefined}
            className={`${error ? 'error' : ''}`}
          />

          {label && (
            <span htmlFor={name} className='label'>
              {label}
            </span>
          )}
          {isFilled && (
            <span className='closeIcon' onClick={handleClearInput}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <path d="M12 9L18 15M18 9L12 15M8.36364 5L2 12L8.36364 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5H8.36364Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>
          )}
        </label>
        {description && <div className="input-description">{description}</div>}
        {error && (
          <p
            className='errorValidation'
            data-testid={testError ? testError : undefined}
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

export default CustomInput;