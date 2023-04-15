export default function FlexResponsivoVariable() {
  return (
    <div>
      <p>Flex- Grid Responsivo con Columnas de Anchura Variable</p>
      <div className="flex flex-wrap  m-4">
        <div className="w-full sm:w-1/2 md:w-2/5 lg:w-1/6 xl:w-7/12 p-4 bg-green-700 mb-1"></div>
        <div className="w-full sm:w-1/3 md:w-1/5 lg:w-3/6 xl:w-1/12 p-4 bg-green-500 mb-1"></div>
        <div className="w-full sm:w-1/6 md:w-2/5 lg:w-2/6 xl:w-4/12 p-4 bg-green-900 mb-1"></div>
        <div className="w-full sm:w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/12 p-4 bg-green-700 mb-1"></div>
      </div>
    </div>
  );
}
