import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const { seasonInfo } = location.state.pokemon.name || {};
  console.log(
    location.state.pokemon.url.sprites.versions["generation-v"]["black-white"]
      .animated.front_default
  );
  return (
    <div className='pokemon-detail-wrapper'>
      <div className='pokemon-name'>
        <h1>Name: {location.state.pokemon.name}</h1>
        <h2>
          Type:
          {location.state.pokemon.url.types.map((type) => (
            <span key={type.type.name}> {type.type.name} </span>
          ))}
        </h2>
      </div>
      <div className='pokemon-img'>
        <img
          src={
            location.state.pokemon.url.sprites.versions["generation-v"][
              "black-white"
            ].animated.front_default
          }
          alt=''
        />
        <img
          src={
            location.state.pokemon.url.sprites.versions["generation-v"][
              "black-white"
            ].animated.back_default
          }
          alt=''
        />
        <img
          src={
            location.state.pokemon.url.sprites.other["official-artwork"]
              .front_default
          }
          alt=''
        />
      </div>
    </div>
  );
};

export default DetailPage;
