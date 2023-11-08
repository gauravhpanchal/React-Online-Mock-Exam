const Option = ({ option, ans, handleClick, el }) => {
  const handleClickOption = () => {
    if (ans === "") {
      handleClick();
    }
  };
  return (
    <div data-testid="option">
      {/* create a button here */}

      <button
        style={{ width: "95%", margin: "10px", padding: "10px" }}
        // disabled={option !== ""}
        // className={option === ans ? (option !== ans ? "bgRed" : "bgGreen") : ""}
      >
        {el}
      </button>
    </div>
  );
};

export default Option;
