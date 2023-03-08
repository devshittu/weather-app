import React, { useRef, useState, useEffect } from "react";
import AppButton from "./AppButton";

function AppDialog({
  active,
  heading,
  content,
  children,
  closable,
  onCancelCallback,
  onOkCallback,
  handleSave,
  type = "info",
}) {
  const [isVisible, setVisibleTo] = useState(false);
  const [typeClassNames, setTypeClassNames] = useState(null);
  const [strokeColorClassName, setStrokeColorClassName] = useState(null);
  const dialogRef = useRef(null);

  const setVisibility = (value) => {
    setVisibleTo(value);
  };
  const onClose = () => {
    setVisibility(false);
    dialogRef.current.close();
  };
  const onCancel = () => {
    //   "do something before finally canceling, probably a callback fxn"
    if (onCancelCallback) onCancelCallback();
    onClose();
  };
  const onShow = () => {
    setVisibility(true);
    dialogRef.current.showModal();
  };
  const onOk = () => {
    //   "do something before finally canceling, probably a callback fxn"
    if (onOkCallback) onOkCallback();
    onClose();
  };
  const handleDialogType = () => {
    let typeClass = "";
    let strokeClass = "";
    switch (type) {
      case "success":
        typeClass =
          "bg-emerald-600 hover:bg-emerald-800 focus:ring-emerald-300 dark:focus:ring-emerald-800";
        strokeClass = "stroke-emerald-600";
        break;
      case "warning":
        typeClass =
          "bg-amber-600 hover:bg-amber-800 focus:ring-amber-300 dark:focus:ring-amber-800";
        strokeClass = "stroke-amber-600";
        break;
      case "danger":
        typeClass =
          "bg-red-600 hover:bg-red-800 focus:ring-red-300 dark:focus:ring-red-800";
        strokeClass = "stroke-red-600";
        break;
      case "info":
      default:
        typeClass =
          "bg-blue-600 hover:bg-blue-800 focus:ring-blue-300 dark:focus:ring-blue-800";
        strokeClass = "stroke-blue-600";
        break;
    }
    setTypeClassNames(typeClass);
    setStrokeColorClassName(strokeClass);
  };

  useEffect(() => {
    if (active) {
      onShow();
    } else onClose();
    handleDialogType();
  }, [active]);

  return (
    <dialog
      ref={dialogRef}
      id="popup-modal"
      tabIndex="-1"
      className={`${
        !isVisible ? "hidden" : "block"
      } fixed top-0 left-0 right-0 z-[50]  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full bg-transparent`}
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative backdrop-blur bg-white/70 dark:bg-slate-900/70 rounded-lg shadow  text-slate-500 dark:text-slate-400">
          {closable && (
            <button
              onClick={onClose}
              type="button"
              className="absolute  top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 fill-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          )}
          {children ? (
            children
          ) : (
            <div className="p-6 text-center">
              <svg
                aria-hidden="true"
                className={`mx-auto mb-4 fill-transparent  w-14 h-14 dark:text-gray-200 ${strokeColorClassName}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal">{content}</h3>

              <AppButton onClick={onOk} type={type}>
                Yes, I'm sure
              </AppButton>
              <AppButton onClick={onCancel} type="light">
                No, cancel
              </AppButton>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}

export default AppDialog;
