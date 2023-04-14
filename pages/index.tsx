const HomePage = () => {
  return (
    <div>
      <div className="bg-yellow-500">
        <h1 className="text-3xl font-bold underline text-white">
          Hola Tailwind
        </h1>
      </div>

      <div>
        <p>Sección Flex- Grid Básico</p>
        <div className="flex">
          <div className="w-full p-4 bg-blue-800 text-white">Una columna</div>
        </div>
        <div className="flex">
          <div className="w-1/2 p-4 bg-blue-800 text-white">Dos columnas</div>
          <div className="w-1/2 p-4 bg-blue-600 text-white"></div>
        </div>
        <div className="flex">
          <div className="w-1/3 p-4 bg-blue-800 text-white">Tres columnas</div>
          <div className="w-1/3 p-4 bg-blue-600 text-white"></div>
          <div className="w-1/3 p-4 bg-blue-500 text-white"></div>
        </div>
        <div className="flex">
          <div className="w-1/4 p-4 bg-blue-800 text-white">
            Cuatro columnas
          </div>
          <div className="w-1/4 p-4 bg-blue-600 text-white"></div>
          <div className="w-1/4 p-4 bg-blue-500 text-white"></div>
          <div className="w-1/4 p-4 bg-blue-400 text-white"></div>
        </div>
        <div className="flex">
          <div className="w-1/5 p-4 bg-blue-800 text-white">Cinco</div>
          <div className="w-1/5 p-4 bg-blue-600 text-white"></div>
          <div className="w-1/5 p-4 bg-blue-500 text-white"></div>
          <div className="w-1/5 p-4 bg-blue-400 text-white"></div>
          <div className="w-1/5 p-4 bg-blue-700 text-white"></div>
        </div>

        <div className="flex">
          <div className="w-1/6 p-4 bg-blue-800 text-white">Seis</div>
          <div className="w-1/6 p-4 bg-blue-600 text-white"></div>
          <div className="w-1/6 p-4 bg-blue-500 text-white"></div>
          <div className="w-1/6 p-4 bg-blue-400 text-white"></div>
          <div className="w-1/6 p-4 bg-blue-300 text-white"></div>
          <div className="w-1/6 p-4 bg-blue-700 text-white"></div>
        </div>
      </div>

      <div>
        <p>Flex- Grid Responsivo con Columnas de Anchura Fija</p>
        <div className="flex flex-wrap  m-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-500 mb-1"></div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-700 mb-1"></div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-500 mb-1"></div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-700 mb-1"></div>
        </div>
      </div>

      <div>
        <p>Flex- Grid Responsivo con Columnas de Anchura Variable</p>
        <div className="flex flex-wrap  m-4">
          <div className="w-full sm:w-1/2 md:w-2/5 lg:w-1/6 xl:w-7/12 p-4 bg-green-700 mb-1"></div>
          <div className="w-full sm:w-1/3 md:w-1/5 lg:w-3/6 xl:w-1/12 p-4 bg-green-500 mb-1"></div>
          <div className="w-full sm:w-1/6 md:w-2/5 lg:w-2/6 xl:w-4/12 p-4 bg-green-900 mb-1"></div>
          <div className="w-full sm:w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/12 p-4 bg-green-700 mb-1"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
