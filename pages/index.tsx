import FlexBasico from "@comp/Flex/FlexBasico";
import FlexResponsivoFijo from "@comp/Flex/FlexResponsivoFijo";
import FlexResponsivoVariable from "@comp/Flex/FlexResponsivoVariable";

const HomePage = () => {
  return (
    <div>
      <div className="bg-yellow-500">
        <h1 className="text-3xl font-bold underline text-white">
          Hola Tailwind
        </h1>
      </div>

      <FlexBasico />
      <FlexResponsivoFijo />
      <FlexResponsivoVariable />
      
    </div>
  );
};

export default HomePage;
