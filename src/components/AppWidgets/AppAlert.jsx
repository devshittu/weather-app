import React, { useState } from "react";
import AppDialog from "./AppDialog";

const AppAlert = ({ onOk, buttonTitle, modalTitle, content, disabled }) => {
  const [isActive, setActiveTo] = useState(false);
  const toggle = () => setActiveTo(!isActive);

  const handleSave = () => {
    onOk();
    toggle();
  };
  return (
    <>
      <button
        onClick={toggle}
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        className={`inline-block z-50 text-white bg-slate-700 hover:bg-slate-800  dark:bg-slate-600 dark:hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800 ${
          disabled ? "bg-slate-300 hover:bg-slate-300  dark:bg-slate-600 dark:hover:bg-slate-700 cursor-not-allowed " : ""
        } `}
        type="button"
        disabled={disabled}
      >
        {buttonTitle}
      </button>
      <AppDialog
        active={isActive}
        title={modalTitle}
        content={content}
        toggle={toggle}
        onOkCallback={handleSave}
        closable
      />
    </>
  );
};

export default AppAlert;
