function InfoFixedWrapper({ children }) {
  return (
    <div className="flex content-end absolute opacity-0 left-0 bottom-0 m-10 ml-10 text-white z-20 app-info-wrapper">
      {children}
    </div>
  );
}

export default InfoFixedWrapper;
