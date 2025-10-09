import logo from '/logo.svg';

export default function App() {
  return (
    <div className="bg-my-red-100 w-full h-dvh px-4 pt-15">
      <div className="border grid gap-5">
        <section className="flex justify-between rounded-xl bg-my-red-500 p-5 text-white items-center">
          <div className="flex flex-col gap-1">
            <h1 className="">My balance</h1>
            <p className="text-2xl font-bold">$921.48</p>
          </div>
          <div className="w-15">
            <img src={logo} alt="" />
          </div>
        </section>
        <section className="bg-white p-5 rounded-xl">
          <h2 className="text-xl font-bold">Spending - Last 7 days</h2>
          <div className="grid grid-cols-7 border min-h-60">
            <div className="">
              <div className="bg-my-red-500 border"></div>
              <p>mon</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// DOING THE WICKS
