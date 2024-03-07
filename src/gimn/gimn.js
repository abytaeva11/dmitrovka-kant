import React, { useState, useEffect } from 'react';
import muz4 from "../gimn-kirgizii-kyrgyz-respublikasynyn-mamlekettik-gimni.mp3";

const Gimn = () => {
  const [isNationalAnthemPlaying, setNationalAnthemPlaying] = useState(false);

  useEffect(() => {
    const playNationalAnthem = () => {
      setNationalAnthemPlaying(true);
      const audio = new Audio(muz4);
      audio.play()
          .then(() => {
            console.log('Гимн воспроизведен');
          })
          .catch((error) => {
            console.error('Ошибка воспроизведения: ', error);
          })
          .finally(() => {
            setNationalAnthemPlaying(false);
          });
    };

    const currentDate = new Date();
    const targetTime = new Date(currentDate);
    targetTime.setHours(8, 30, 0);
    let timeUntilNextAnthem = targetTime - currentDate;
    if (timeUntilNextAnthem < 0) {
      timeUntilNextAnthem += 24 * 60 * 60 * 1000;
    }

    const timerId = setTimeout(() => {
      playNationalAnthem();
    }, timeUntilNextAnthem);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
      <div style={{}}>
        {isNationalAnthemPlaying ? (
            <p>Гимн воспроизводится...</p>
        ) : null}
      </div>
  );
};

export default Gimn;