const Header = ({ onButtonClick }) => {
  return (
    <div className="header">
      <div className="heading">
        <h2>Expense Tracker</h2>
      </div>

      <div className="balance-div">
        <div className="balance">
          <h5>Balance</h5>
          <span>₹ 2000</span>
        </div>
        <div className="buttondiv">
          <button onClick={onButtonClick}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
