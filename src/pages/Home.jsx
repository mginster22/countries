import React, { useState, useEffect } from "react";
import { getAllCountries } from "../api";
import Card from "../components/Card";
import Controls from "../components/Controls";
import List from "../components/List";


const Home = ({ countries, setCountries }) => {
  const [filterCountry, setFilterCountry] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }
    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilterCountry(data);
  };

  useEffect(() => {
    if (!countries.length) {
      getAllCountries().then(({ data }) => setCountries(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);
console.log(filterCountry)
  return (
    <>
      <Controls handleSearch={handleSearch}/>
      <List>
        {filterCountry.map((c) => {
          const countryInfo = {
            img: c.flag,
            name: c.name,
            info: [
              {
                title: "Name",
                description: c.name,
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Area",
                description: c.area,
              },
            ],
          };
          return <Card key={c.name} {...countryInfo} />;
        })}
      </List>
    </>
  );
};

export default Home;
