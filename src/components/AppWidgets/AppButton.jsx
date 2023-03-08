import React, {useState, useEffect} from "react";

function AppButton({
  children,
  type,
  size,
  colorless,
  className,
  onClick,
  disabled,
}) {
  const [typeClassNames, setTypeClassNames] = useState(null);
  const [sizeClassNames, setSizeClassNames] = useState(null);
  const handleType = () => {
    let properties = "";
    switch (type) {
      case "success":
        properties =
          "text-emerald-600 hover:text-emerald-800 focus:ring-emerald-300/60 dark:focus:ring-emerald-800/60";
        break;
      case "warning":
        properties =
          "text-amber-600 hover:text-amber-800 focus:ring-amber-300/60 dark:focus:ring-amber-800/60";
        break;
      case "danger":
        properties =
          "text-red-600 hover:text-red-800 focus:ring-red-300/60 dark:focus:ring-red-800/60";
        break;
      case "info":
        properties =
          "text-blue-600 hover:text-blue-800 focus:ring-blue-300/60 dark:focus:ring-blue-800/60";
          break;
      default:
        properties = "text-white focus:ring-white/60";
        break;
    }
    setTypeClassNames(properties);
  };
  const handleSize = () => {
    let properties = "";
    switch (size) {
      case "sm":
        properties = "text-sm";
        break;
      case "md":
        properties = "text-lg";
        break;
      case "lg":
        properties = "text-2xl";
        break;
      default:
        properties = "";
        break;
    }
    setSizeClassNames(properties);
  };

  useEffect(() => {
    handleType();
    handleSize();
  });
  return (
    <button
      onClick={onClick}
      className={`inline-block z-50
      rounded-lg px-5 py-2.5 text-center
      backdrop-blur focus:ring-4 focus:outline-none 
      ${sizeClassNames}
      ${typeClassNames}
      ${
        disabled
          ? "text-slate-500 bg-slate-300/70 dark:bg-slate-600/70 cursor-not-allowed "
          : "bg-white/10 hover:bg-white/30 dark:bg-slate-300/10 dark:hover:bg-slate-300/30" //default
      } 

      ${className}
      `}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default AppButton;
