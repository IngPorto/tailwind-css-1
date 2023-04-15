export default function FlexResponsivoFijo() {
  return (
    <div>
      <p>Flex- Grid Responsivo con Columnas de Anchura Fija</p>
      <div className="flex flex-wrap  m-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-500 mb-1"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-700 mb-1"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-500 mb-1"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-700 mb-1"></div>
      </div>
    </div>
  );
}
