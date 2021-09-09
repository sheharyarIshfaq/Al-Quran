import React, { useEffect, useState } from "react";
import Item from "./Item";
import classes from "./ItemContainer.module.css";
import Spinner from "./UI/Spinner";

const ItemContainer = () => {
  const [surahs, setSurahs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSurahs = async () => {
      setIsLoading(true);
      const response = await fetch("https://api.alquran.cloud/v1/surah");
      const surahData = await response.json();
      setSurahs(surahData.data);
      setIsLoading(false);
    };
    fetchSurahs();

    return () => {
      setSurahs([]);
      setIsLoading(false);
    };
  }, []);

  return (
    <div className={classes.container}>
      <h1>Surah's of Quran Pak</h1>
      {isLoading && (
        <div className={classes.loadingContainer}>
          <Spinner />
        </div>
      )}
      {!isLoading && (
        <div className={classes.row}>
          {surahs.map((surah) => (
            <Item
              key={surah.number}
              number={surah.number}
              name={surah.name}
              englishName={surah.englishName}
              englishNameTranslation={surah.englishNameTranslation}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemContainer;
