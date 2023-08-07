import { useState } from 'react';
import { useCatImage } from './servicios/hooks/useCatImage';
import { useCatFact } from './servicios/hooks/useCatFact';
import Otro from './servicios/Components/Otro';
// import { getRadomFact } from './servicios/facts';

export default function App() {
  const { fact, refreshFact } = useCatFact();
  const { imgeUrl, loading } = useCatImage({ fact });

  const [color, setColor] = useState(true);

  let coloresVar = 'bg-teal-600';
  if (color) {
    coloresVar = 'bg-teal-600';
  } else {
    coloresVar = 'bg-sky-300';
  }

  const handleButton = async () => {
    refreshFact();
    // const newFact = await getRadomFact();
    // setFact(newFact);
    setColor(!color);
  };

  return (
    <div
      className={`min-h-screen ${coloresVar} p-8 w-full flex-1 text-center justify-center items-center gap-5`}
    >
      <h1 className=" mb-5 text-3xl text-black animate-fade-up lg:text-blue-600">
        {' '}
        App de Gatitos
      </h1>
      <button
        onClick={handleButton}
        className={`border-2  p-2 border-blue-400 rounded-xl bg-orange-950 text-white font-bold`}
        type="button"
      >
        Press
      </button>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        {fact && <p className="mb-4"> {fact}</p>}
        {loading ? (
          <h2>Cargando..</h2>
        ) : (
          <div className=" bg-black animate-jump  w-[60%]  h-100 flex justify-center items-center ">
            {imgeUrl && (
              <img
                className="  w-[80%] h-[10%]  object-contain xl:w-[50%] xl:h-[5%] "
                src={imgeUrl}
                alt={`imge extracted using the first 3 worlds for ${fact}`}
              />
            )}
          </div>
        )}
        <Otro />
      </div>
    </div>
  );
}
