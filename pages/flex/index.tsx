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
    </div>
  );
};

export default Flex;
