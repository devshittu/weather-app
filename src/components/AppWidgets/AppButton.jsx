import React, { useState, useEffect } from "react";

function AppButton({
  children,
  nativeType,
  type,
  size,
  className,
  onClick,
  disabled,
  outlined,
}) {
  const [typeClassNames, setTypeClassNames] = useState(null);
  const [sizeClassNames, setSizeClassNames] = useState(null);
  const handleType = () => {
    let properties = "";
    switch (type) {
      case "success":
        properties = `text-emerald-600 hover:text-emerald-500 focus:ring-emerald-500/80 dark:focus:ring-emerald-500/90 ${
          outlined
            ? "outline outline-offset-2 outline-4 outline-emerald-500"
            : ""
        }`;
        break;
      case "warning":
        properties = `text-amber-600 hover:text-amber-500 focus:ring-amber-500/80 dark:focus:ring-amber-500/90 ${
          outlined ? "outline outline-offset-2 outline-4 outline-amber-500" : ""
        }`;
        break;
      case "danger":
        properties = `text-red-600 hover:text-red-500 focus:ring-red-500/80 dark:focus:ring-red-500/90 ${
          outlined ? "outline outline-offset-2 outline-4 outline-red-500" : ""
        }`;
        break;
      case "info":
        properties = `text-blue-600 hover:text-blue-500 focus:ring-blue-500/80 dark:focus:ring-blue-500/90 ${
          outlined ? "outline outline-offset-2 outline-4 outline-blue-500" : ""
        }`;
        break;
      case "light":
        properties = `text-slate-600 hover:text-slate-500 dark:text-white dark:hover:text-white/90 focus:ring-slate-500/80 dark:focus:ring-slate-300 ${
          outlined
            ? "outline outline-offset-2 outline-4 outline-slate-500 dark:outline-slate-300"
            : ""
        }`;
        break;
      default:
        properties = `text-white focus:ring-white/60 ${
          outlined ? "outline outline-offset-1 outline-4 outline-white" : ""
        }`;
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
      rounded-lg mx-1 px-5 py-2.5 text-center
      backdrop-blur focus:ring-4 focus:outline-none 
      ${sizeClassNames}
      ${typeClassNames}
      ${
        disabled
          ? "text-slate-400 hover:text-slate-400 bg-slate-300/70 dark:bg-slate-600/70 cursor-not-allowed "
          : "bg-white/10 hover:bg-white/30 dark:bg-slate-300/10 dark:hover:bg-slate-300/30" //default
      } 

      ${className}
      `}
      type={nativeType ? nativeType : "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default AppButton;
