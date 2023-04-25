import Image from "next/image";

const App = () => {
  return (
    <div>
      <div
        className="w-full h-64 bg-no-repeat bg-cover bg-center md:h-32"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)",
        }}
      >
        <div className="relative top-0 left-0 bg-black/50 h-full flex justify-center items-center">
            <p className="text-white text-5xl tracking-widest font-semibold text-center">La Mesón de David</p>
        </div>
      </div>
      <div className="min-h-screen bg-gray-300 p-4 flex gap-3 content-start	flex-wrap justify-evenly">
        <div className="flex flex-col items-center rounded-lg max-w-[32%] md:w-1/2 md:flex-row md:bg-white md:gap-x-1">
          <div>
            <Image
              className="rounded-lg w-full md:rounded-r-none"
              alt="hamburgesa"
              src={
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80"
              }
              width={300}
              height={100}
            />
          </div>
          <div className="bg-white rounded -mt-2 shadow-lg mx-2 w-4/5 p-8 md:p-2 md:bg-transparent md:m-0 md:shadow-transparent">
            <h2 className="uppercase text-xl font-semibold text-gray-900 tracking-tight">
              Hambuguesa de queso
            </h2>
            <p className="text-gray-500 leading-snug md:text-sm">
              Hamburguesa de queso y aderezo de chipotle
            </p>
            <div className="text-sm font-semibold my-3">COP $18.500</div>
            <div className="text-yellow-600 tracking-wider">
              ★★★★☆ | 47 reviews
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-lg max-w-[32%] md:w-1/2 md:flex-row md:bg-white md:gap-x-1">
          <div>
            <Image
              className="rounded-lg w-full md:rounded-r-none"
              alt="hamburgesa"
              src={
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80"
              }
              width={300}
              height={100}
            />
          </div>
          <div className="bg-white rounded -mt-2 shadow-lg mx-2 w-4/5 p-8 md:p-2 md:bg-transparent md:m-0 md:shadow-transparent">
            <h2 className="uppercase text-xl font-semibold text-gray-900 tracking-tight">
              Hambuguesa de queso
            </h2>
            <p className="text-gray-500 leading-snug md:text-sm">
              Hamburguesa de queso y aderezo de chipotle
            </p>
            <div className="text-sm font-semibold my-3">COP $18.500</div>
            <div className="text-yellow-600 tracking-wider">
              ★★★★☆ | 47 reviews
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-lg max-w-[32%] md:w-1/2 md:flex-row md:bg-white md:gap-x-1">
          <div>
            <Image
              className="rounded-lg w-full md:rounded-r-none"
              alt="hamburgesa"
              src={
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80"
              }
              width={300}
              height={100}
            />
          </div>
          <div className="bg-white rounded -mt-2 shadow-lg mx-2 w-4/5 p-8 md:p-2 md:bg-transparent md:m-0 md:shadow-transparent">
            <h2 className="uppercase text-xl font-semibold text-gray-900 tracking-tight">
              Hambuguesa de queso
            </h2>
            <p className="text-gray-500 leading-snug md:text-sm">
              Hamburguesa de queso y aderezo de chipotle
            </p>
            <div className="text-sm font-semibold my-3">COP $18.500</div>
            <div className="text-yellow-600 tracking-wider">
              ★★★★☆ | 47 reviews
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full bg-gray-800 flex p-4 justify-between text-white">
        <div>
          <div className="hover:text-blue-400 hover:pointer">Facebook</div>
          <div className="hover:text-red-400">Twitter</div>
          <div className="hover:text-yellow-400">Instagram</div>
        </div>
        <ul className="list-disc">
          <li>Soporte</li>
          <li>Acerca de nosotros</li>
          <li>Registro</li>
          <li>Aviso Privacidad</li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
