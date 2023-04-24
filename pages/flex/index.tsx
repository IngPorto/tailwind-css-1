import FlexBasico from "@comp/Flex/FlexBasico";
import FlexResponsivoFijo from "@comp/Flex/FlexResponsivoFijo";
import FlexResponsivoVariable from "@comp/Flex/FlexResponsivoVariable";

const Flex = () => {
  return (
    <div>
      <FlexBasico />
      <FlexResponsivoFijo />
      <FlexResponsivoVariable />
      <div className="block h-px w-auto bg-slate-300 grid grid-cols-1 divide-y-3 flex text-center">
        <div className="rounded-full w-fit bg-slate-100 px-4 py-1">Hola</div>
      </div>
      <div className="m-8">
        <div className="flex flex-row bg-gray-800 p-8">
          <div className="bg-gray-300 px-4 py-2 m-2">1</div>
          <div className="bg-gray-300 px-4 py-2 m-2">2</div>
          <div className="bg-gray-300 px-4 py-2 m-2">3</div>
        </div>
      </div>
      <div>
        <p className="text-xl font-bold text-center">Flex Justify Center</p>
        <div className="m-8">
          <div className="flex justify-center bg-gray-800 p-8">
            <div className="bg-gray-300 px-4 py-2 m-2">1</div>
            <div className="bg-gray-300 px-4 py-2 m-2">2</div>
            <div className="bg-gray-300 px-4 py-2 m-2">3</div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl font-bold text-center">Flex Justify Between - Items center</p>
        <div className="m-8">
          <div className="h-64 flex items-center justify-between bg-gray-800 p-8">
            <div className="bg-gray-300 px-4 py-2 m-2">1</div>
            <div className="bg-gray-300 px-4 py-2 m-2">2</div>
            <div className="bg-gray-300 px-4 py-2 m-2">3</div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl font-bold text-center">Flex Justify Evenly - Order</p>
        <div className="m-8">
          <div className="h-64 flex items-baseline justify-evenly bg-gray-800 p-8">
            <div className="text-white order-2">Hola</div>
            <div className="bg-gray-300 px-4 py-2 m-2 order-10">1</div>
            <div className="bg-gray-300 px-4 py-2 m-2 order-1">2</div>
            <div className="bg-gray-300 px-4 py-2 m-2 order-4">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flex;
