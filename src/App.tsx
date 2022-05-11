import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./Redux/Reducers/authReducer";
import Checkbox from "./Components/Checkbox/Checkbox";
import LoginForm from "./Components/LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import logoutUser from "./Redux/Actions/Creators/logout";
import "./App.css";

const App = () => {
  const [baseCheckboxIsChecked, setBaseCheckboxIsChecked] = useState(false);
  const [baseCheckboxIsHalfChecked, setBaseCheckboxIsHalfChecked] =
    useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <div className="App">
      {user !== "" ? (
        <div className="checkboxes-preview-container">
          <button onClick={handleLogout} className="logout-button">
            Log out
          </button>
          <div className="user-label">Welcome {user}!</div>
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
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default App;
