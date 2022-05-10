import React, { useState, useEffect } from "react";
import CheckboxChecked from "../../Shared/checkboxChecked";
import CheckboxHalf from "../../Shared/checkboxHalf";
import CheckboxUnchecked from "../../Shared/checkboxUnchecked";

const Checkbox = (props: any) => {
  const { checked, setChecked, checkedHalf, setCheckedHalf, disabled } = props;

  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedHalf, setIsCheckedHalf] = useState(false);

  useEffect(() => {
    if (checked === true || checked === false) {
      setIsChecked(checked);
    }
  }, [checked]);

  useEffect(() => {
    if (checkedHalf === true || checkedHalf === false) {
      setIsCheckedHalf(checkedHalf);
    }
  }, [checkedHalf]);

  const checkCheckbox = () => {
    if (setChecked) {
      setChecked(true);
    }
    setIsChecked(true);
    uncheckHalf();
  };

  const uncheckCheckbox = () => {
    if (setChecked) {
      setChecked(false);
    }
    setIsChecked(false);
  };

  const checkHalf = () => {
    if (setCheckedHalf) {
      setCheckedHalf(true);
    }
    setIsCheckedHalf(true);
  };

  const uncheckHalf = () => {
    if (setChecked) {
      setCheckedHalf(false);
    }
    setIsCheckedHalf(false);
  };

  const handleClick = (e: any) => {
    if (disabled) {
      return;
    }
    const isLeftClick = e.type === "click";
    e.preventDefault();
    if (isLeftClick) {
      if (isChecked) {
        uncheckCheckbox();
      } else {
        checkCheckbox();
      }
    } else {
      uncheckCheckbox();
      if (isCheckedHalf) {
        uncheckHalf();
      } else {
        checkHalf();
      }
    }
  };

  return (
    <div
      className={`checkbox-container ${isChecked && "checked"} ${
        disabled && "disabled"
      }`}
    >
      {isCheckedHalf ? (
        <CheckboxHalf onClick={handleClick} onContextMenu={handleClick} />
      ) : isChecked ? (
        <CheckboxChecked onClick={handleClick} onContextMenu={handleClick} />
      ) : (
        <CheckboxUnchecked onClick={handleClick} onContextMenu={handleClick} />
      )}
    </div>
  );
};

export default Checkbox;
