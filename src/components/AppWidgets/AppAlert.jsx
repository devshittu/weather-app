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
      <AppButton
        onClick={toggle}
      >
        {buttonTitle}
      </AppButton>
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
