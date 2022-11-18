const coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  console.log(Object.entries(coolestTvShow));
  
  // [
  //   [ 'name', 'BoJack Horseman' ],
  //   [ 'genre', 'adult animation' ],
  //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
  //   [ 'favoriteCharacter', 'Princess Carolyn' ],
  //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
  //   [ 'seasons', 6 ]
  // ]


const countryCities = {
    france: 'Paris',
    brazil: 'Brasília',
    spain: 'Madrid',
    portugal: 'Lisboa',
  };

  const countryCapital = (countries) => {
    const pairKeyValue = Object.entries(countries);

    for(index in pairKeyValue) {
        console.log('--------');
        console.log('Country:', pairKeyValue[index][0]);
        console.log('Capital:', pairKeyValue[index][1]);
      };
  }
  console.log(countryCapital(countryCities));
  