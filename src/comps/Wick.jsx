import { useState } from "react";

export default function Wick({ info, highestNumber }) {
  const dayName = info.day.split("").slice(0, 3).join("");
  const style = {
    height: `${(info.moneySpent / highestNumber) * 100}%`,
    backgroundColor: `${highestNumber === info.moneySpent ? "hsl(186,34%,65%)" : "hsl(10,79%,65%)"}`,
  };

  const [showMoney, setShowMoney] = useState(false);

  const showStyle = { display: `${showMoney ? "block" : "none"}` };

  return (
    <div className="flex flex-col gap-2 text-center">
      <div className="grid min-h-43 items-end">
        <div
          style={style}
          className="relative cursor-pointer rounded"
          onMouseOver={() => {
            setShowMoney(true);
          }}
          onMouseLeave={() => {
            setShowMoney(false);
          }}
        >
          <div
            style={showStyle}
            className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-black p-1 text-xs text-white"
          >
            ${info.moneySpent / 100}
          </div>
        </div>
      </div>
      <p className="text-my-brown-400 text-sm lowercase">{dayName}</p>
    </div>
  );
}
