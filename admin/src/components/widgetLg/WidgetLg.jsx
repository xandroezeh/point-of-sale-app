import "./widgetLg.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgBtn " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="./images/labcoat.jpg"
                alt="avatar"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Anita Ezinwa</span>
            </td>
            <td className="widgetLgDate">10/08/2022</td>
            <td className="widgetLgAmt">₦2,000</td>
            <td className="widgetLgBtn">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLg;
