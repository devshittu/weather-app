import React, { useState } from "react";
import AppButton from "./AppButton";
import AppDialog from "./AppDialog";

const AppAlert = ({
  onOk,
  buttonTitle,
  buttonType,
  modalTitle,
  content,
  alertType,
  disabled,
}) => {
  const [isActive, setActiveTo] = useState(false);
  const toggle = () => setActiveTo(!isActive);

  const deactivate = () => {
    console.log("wanted updating the active state to :// ", isActive);
    setActiveTo(false);
    console.log("updated the active state to :// ", isActive);
  };
  const handleSave = () => {
    onOk();
    toggle();
  };
  return (
    <>
      <AppButton onClick={toggle} type={buttonType}>
        {buttonTitle}
      </AppButton>
      <AppDialog
        active={isActive}
        title={modalTitle}
        type={alertType}
        updateActiveStatus={deactivate}
        content={content}
        toggle={toggle}
        onOkCallback={handleSave}
        closable
      />
    </>
  );
};

export default AppAlert;
