import React, { useState } from "react";
import Checkbox from "./Components/Checkbox/Checkbox";
import "./App.css";

const App = () => {
  const [baseCheckboxIsChecked, setBaseCheckboxIsChecked] = useState(false);
  const [baseCheckboxIsHalfChecked, setBaseCheckboxIsHalfChecked] =
    useState(false);

  return (
    <div className="App">
      <div className="checkboxes-preview-container">
        <div className="checkboxes-preview-container-top-row">
          <div className="checkbox-preview">
            <div className="checkbox-container-label">Base Checkbox</div>
            <div className="checkbox-and-label-container">
              <div>
                <Checkbox
                  checked={baseCheckboxIsChecked}
                  setChecked={setBaseCheckboxIsChecked}
                  checkedHalf={baseCheckboxIsHalfChecked}
                  setCheckedHalf={setBaseCheckboxIsHalfChecked}
                />
              </div>
              <div>text_primary</div>
            </div>
          </div>
          <div className="checkbox-preview">
            <div className="checkbox-container-label">Stacked Checkboxes</div>
            <div className="checkbox-and-label-container checkbox-column">
              <div className="row">
                <div>
                  <Checkbox />
                </div>
                <div>text_primary</div>
              </div>
              <div className="row">
                <div>
                  <Checkbox />
                </div>
                <div>text_primary</div>
              </div>
              <div className="row">
                <div>
                  <Checkbox />
                </div>
                <div>text_primary</div>
              </div>
            </div>
          </div>
          <div className="checkbox-preview">
            <div className="checkbox-container-label">Inline Checkboxes</div>
            <div className="checkbox-and-label-container checkbox-row">
              <div className="row margin-right-10">
                <div>
                  <Checkbox />
                </div>
                <div>text_primary</div>
              </div>
              <div className="row margin-right-10">
                <div>
                  <Checkbox />
                </div>
                <div>text_primary</div>
              </div>
              <div className="row margin-right-10">
                <div>
                  <Checkbox />
                </div>
                <div>text_primary</div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkboxes-preview-container-bottom-row">
          <div className="checkbox-preview">
            <div className="checkbox-container-label">Checked</div>
            <div className="checkbox-and-label-container">
              <div>
                <Checkbox checked={true} />
              </div>
              <div>text_primary</div>
            </div>
          </div>
          <div className="checkbox-preview">
            <div className="checkbox-container-label">Check Disabled</div>
            <div className="checkbox-and-label-container disabled">
              <div>
                <Checkbox checked={true} disabled />
              </div>
              <div>text_primary</div>
            </div>
          </div>
          <div className="checkbox-preview">
            <div className="checkbox-container-label">Checkbox disabled</div>
            <div className="checkbox-and-label-container disabled">
              <div>
                <Checkbox disabled />
              </div>
              <div>text_primary</div>
            </div>
          </div>
          <div className="checkbox-preview">
            <div className="checkbox-container-label">Checked half</div>
            <div className="checkbox-and-label-container">
              <div>
                <Checkbox checkedHalf />
              </div>
              <div>text_primary</div>
            </div>
          </div>
          <div className="checkbox-preview">
            <div className="checkbox-container-label">
              Checked half disabled
            </div>
            <div className="checkbox-and-label-container">
              <div>
                <Checkbox checkedHalf disabled />
              </div>
              <div>text_primary</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
