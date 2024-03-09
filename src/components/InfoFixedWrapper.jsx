function InfoFixedWrapper({ children, rightChild }) {
  return (
    <>
      <div className="flex content-end absolute opacity-0 left-0 bottom-0 m-10 ml-10 z-20 app-info-wrapper">
        {children}
      </div>
      <div className="flex content-end absolute opacity-0 right-0 bottom-0 m-10 ml-10 z-20 app-info-wrapper">
        {rightChild}
      </div>
    </>
  );
}

export default InfoFixedWrapper;
