const Variantes = () => {
  return (
    <div>
      <div className="mx-8 mt-8">
        <p className="text-xl font-semibold leading-7 text-indigo-600">
          Variantes y Pseudo-Clases
        </p>
      </div>
      <div className="flex justify-evenly my-8">
        <div className="grow block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Variantes
          </p>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <ul>
              <li>responsive</li>
              <li>hover</li>
              <li>focus</li>
              <li>disabled</li>
            </ul>
          </div>
        </div>
        <div className="grow block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Pseudo-Clase
          </p>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <p>Palabra clave que se añade a la clase</p>
            <ul>
              <li>Responsive: sm, md, lg, xl</li>
              <li>Hover: hover</li>
              <li>Focus: focus</li>
              <li>Disabled: disabled</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-8 mb-8">
        <p className="text-xl font-semibold leading-7 ">Disabled</p>
        <div>
            <button className="disabled:opacity-75 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
            <button disabled className="disabled:opacity-75 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Variantes;
