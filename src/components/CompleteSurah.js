import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import classes from "./CompleteSurah.module.css";
import Spinner from "./UI/Spinner";

const CompleteSurah = () => {
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);
  const history = useHistory();

  let numberOfAyat = 0;
  const params = useParams();
  const surahNumber = params.surahNumber;
  const [surah, setSurah] = useState([]);
  const ayats = surah.ayahs;

  useEffect(() => {
    setSurah([]);
    const fetchSurahDetails = async () => {
      setIsLoadingDetail(true);
      const response = await fetch(
        `https://api.alquran.cloud/v1/surah/${surahNumber}`
      );
      const surahData = await response.json();
      setSurah(surahData.data);
      setIsLoadingDetail(false);
    };
    fetchSurahDetails();

    return () => {
      setSurah([]);
      setIsLoadingDetail(false);
    };
  }, [surahNumber]);

  const backToHomePageHandler = () => {
    history.push("/");
  };

  return (
    <div className={classes.container}>
      {isLoadingDetail && (
        <div className={classes.loadingContainer}>
          <Spinner />
        </div>
      )}
      {!isLoadingDetail && (
        <>
          <div className={classes.details}>
            <h2>Surah Details</h2>
            <p>Surah Number # {surah.number}</p>
            <p>Arabic Name: {surah.name}</p>
            <p>English Name: {surah.englishName}</p>
            <p>English Name Meaning: {surah.englishNameTranslation}</p>
            <p>Place of Revelation: {surah.revelationType}</p>
            <p>Number of Ayats: {surah.numberOfAyahs}</p>
            <button onClick={backToHomePageHandler}>
              Go Back To Home Page
            </button>
          </div>
          <div className={classes.surahAyats}>
            {ayats &&
              ayats.map((ayat) => {
                const updatingNumberOfAyat = () => {
                  numberOfAyat++;
                };
                updatingNumberOfAyat();
                return (
                  <span key={ayat.number} className={classes.ayatText}>
                    <span>{ayat.text}</span>
                    <span className={classes.ayatNumber}>({numberOfAyat})</span>
                  </span>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default CompleteSurah;
