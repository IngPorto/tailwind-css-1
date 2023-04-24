import Image from "next/image";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300 p-4">
      <div className="flex flex-col items-center">
        <div>
          <Image
          className="rounded-lg w-full"
            alt="hamburgesa"
            src={
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80"
            }
            width={400}
            height={100}
          />
        </div>
        <div className="bg-white rounded -mt-2 shadow-lg mx-2 w-4/5 p-8">
            <h2 className="uppercase text-xl font-semibold text-gray-900 tracking-tight">Hambuguesa de queso</h2>
            <p className="text-gray-500 leading-snug">Hamburguesa de queso y aderezo de chipotle</p>
            <div className="text-sm font-semibold my-3">COP $18.500</div>
            <div className="text-yellow-600 tracking-wider">★★★★☆ | 47 reviews</div>
        </div>
      </div>
    </div>
  );
};

export default App;
