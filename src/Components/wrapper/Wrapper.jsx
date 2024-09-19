
const Wrapper = () => {
  const data = [
    {
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <>
      <section className="my-36 p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 ">
          {data.map((val, index) => {
            return (
              <div className="text-center lg:px-20" key={index}>
                <h3 className="text-3xl ">{val.title}</h3>
                <p className="max-w-md mt-3">{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
