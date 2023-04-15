export default function FlexBasico() {
  return (
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
        <div className="w-1/4 p-4 bg-blue-800 text-white">Cuatro columnas</div>
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
  );
}
