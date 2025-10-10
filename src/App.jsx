import Wick from "./comps/Wick";
import logo from "/logo.svg";
import data from "./data.json";

export default function App() {
  const myData = data;
  const lastMonthTotal = calculateSingleMonth(myData, myData.length - 1);
  const monthDiff = calculateMonthDifference(myData);
  const lastSevenDays = getLastSevenDays();
  const highestNumber = lastSevenDays.reduce(
    (val, item) => (val > item.moneySpent ? val : item.moneySpent),
    lastSevenDays[0].moneySpent,
  );
  const monthDiffColorStyle = { color: `${monthDiff >= 0 ? "red" : "green"}` };

  function calculateMonthDifference(data) {
    const lastToPrevMonth = data.length - 2;
    const lastMonth = data.length - 1;

    const lastToPrevMonthSum = calculateSingleMonth(data, lastToPrevMonth);
    const lastMonthSum = calculateSingleMonth(data, lastMonth);

    const finalNumber =
      ((lastMonthSum - lastToPrevMonthSum) / lastToPrevMonthSum) * 100;

    return finalNumber.toFixed(1);
  }

  function calculateSingleMonth(data, monthNumber) {
    let sum = 0;
    data[monthNumber].days.forEach((item) => {
      sum += item.moneySpent;
    });

    return sum;
  }

  function getLastSevenDays() {
    const allDays = myData[myData.length - 1].days;
    const sevenDays = allDays.slice(-7);

    return sevenDays;
  }

  return (
    <div className="bg-my-red-100 h-dvh w-full px-4 pt-15">
      <div className="mx-auto grid max-w-[800px] gap-5 rounded">
        <section className="bg-my-red-500 flex items-center justify-between rounded-xl p-5 text-white">
          <div className="flex flex-col gap-1">
            <h1 className="">My balance</h1>
            <p className="text-2xl font-bold">$921.48</p>
          </div>
          <div className="w-15">
            <img src={logo} alt="" />
          </div>
        </section>
        <section className="grid gap-7 rounded-xl bg-white p-5">
          <div>
            <h2 className="mb-5 text-xl font-bold">Spending - Last 7 days</h2>
            <div className="grid grid-cols-7 gap-2">
              {lastSevenDays.map((item) => (
                <Wick
                  info={item}
                  highestNumber={highestNumber}
                  key={item.moneySpent}
                />
              ))}
            </div>
          </div>
          <div className="border-my-red-100 border"></div>
          <div className="flex h-20 justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-my-brown-400">Total this month</h2>
              <p className="text-3xl font-bold">
                $ {(lastMonthTotal / 100).toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col items-end justify-end">
              <h3 className="font-bold" style={monthDiffColorStyle}>
                {monthDiff > 0 ? "+" : ""}
                {monthDiff}%
              </h3>
              <p className="text-my-brown-400">from last month</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// DOING THE WICKS
