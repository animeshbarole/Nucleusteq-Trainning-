const Button = () => {
  const handleClick = () => {
    alert("Animesh is clicked the button");
  };

  return (
    <div className="button-outline">
      <div className="button-div">
        <button onClick={handleClick}> Click Me</button>
      </div>
    </div>
  );
};

export default Button;
