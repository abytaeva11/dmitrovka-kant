import React, { useEffect, useState } from "react";
import { useAppContext } from "../global/AppContext";
import "../App.css";
import muz1 from "../assets/img/Мирбек Атабеков - Таласым.mp3";
import muz2 from "../Асылбек Насирдинов - Улуу көч.mp3";
import muz3 from "../кыргызский-оозкомуз_(muzmo.su).mp3";
import muz4 from "../нурак-комузкууу_(muzmo.su).mp3";
import muz5 from "../kyrgyzskaya-narodnaya-muzyka-esimde.mp3";
import "../components/DefaultValue.css";
import audio2 from "../киргиле.aac";
import audio3 from "../audiozvonok.aac";

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function Monday({ disableAudioDays, setDisableAudioDays }) {
    const {
        selectedAudio,
        currentTime,
        activeInput,
        disableAudio,
        audioRef,
        handleSelectChange,
        handleStopAudio,
        handleInputFocus,
        handleCheckboxChange,
        setActiveInput,
    } = useAppContext();

    const handleInputChange = (inputName, event) => {
        const { value } = event.target;
        setMondayInputs((prevInputs) => ({
            ...prevInputs,
            [inputName]: value,
        }));
    };

    useEffect(() => {
        const savedInputs = localStorage.getItem("mondayInputs");
        if (savedInputs) {
            setMondayInputs(JSON.parse(savedInputs));
        }
    }, []);

    const [mondayInputs, setMondayInputs] = useState(() => {
        const savedInputs = localStorage.getItem("mondayInputs");
        return savedInputs
            ? JSON.parse(savedInputs)
            : {
                input1: "08:00",
                input2: "08:25",
                input3: "08:30",
                input4: "09:10",
                input5: "09:15",
                input6: "09:55",
                input7: "10:00",
                input8: "10:40",
                input9: "10:45",
                input10: "11:25",
                input11: "11:30",
                input12: "12:10",
                input13: "12:15",
                input14: "12:55",
                input15: "13:20",
                input16: "13:45",
                input17: "13:50",
                input18: "14:30",
                input19: "14:35",
                input20: "15:15",
                input21: "15:20",
                input22: "16:00",
                input23: "16:05",
                input24: "16:45",
                input25: "16:50",
                input26: "17:30",
                input27: "17:35",
                input28: "18:15",
            };
    });

    useEffect(() => {
        localStorage.setItem("mondayInputs", JSON.stringify(mondayInputs));
    }, [mondayInputs]);

    useEffect(() => {
        const currentDayOfWeek = daysOfWeek[new Date().getDay()];
        if (currentDayOfWeek === "Monday") {
            const inputs = document.querySelectorAll("input[type='time']");
            inputs.forEach((input, index) => {
                if (
                    input.value === currentTime &&
                    !disableAudio && !disableAudioDays.monday
                ) {
                    setActiveInput(index);
                    if (selectedAudio) {
                        handlePlayAudio(selectedAudio);
                    }
                }
            });
        }
    }, [currentTime, selectedAudio, disableAudio, disableAudioDays.monday]);

    const handlePlayAudio = (audioFile) => {
        audioRef.current.src = audioFile;
        audioRef.current.play();

        setTimeout(() => {
            handleStopAudio();

            setTimeout(() => {
                if (!disableAudio) {
                    let nextAudio = audio2;

                    if (
                        [
                            mondayInputs.input2,
                            mondayInputs.input4,
                            mondayInputs.input6,
                            mondayInputs.input8,
                            mondayInputs.input10,
                            mondayInputs.input12,
                            mondayInputs.input14,
                            mondayInputs.input16,
                            mondayInputs.input18,
                            mondayInputs.input20,
                            mondayInputs.input22,
                            mondayInputs.input24,
                        ].includes(currentTime)
                    ) {
                        nextAudio = audio3; // If currentTime matches any of the specific inputs, play audio3
                    }

                    audioRef.current.src = nextAudio;
                    audioRef.current.play();

                    setTimeout(() => {
                        // Stop the second audio after 30,000 milliseconds (30 секунд)
                        handleStopAudio();
                    }, 30000);
                }
            }, 2000);
        }, 40000);
    };

    return (
        <div>
            <center>
                <div className="card">
                    <p className="card__name">
                        {currentTime && <h2 className="title">{currentTime}</h2>}
                        <h3 className="subtitle">Понедельник</h3>
                    </p>
                    <select
                        style={{
                            background: "white",
                            color: "black",
                            padding: "5px 22px",
                            border: "none",
                            position: "absolute",
                            marginLeft: "-498px",
                            marginTop: "75px",
                            borderRadius: "5px",
                        }}
                        onChange={handleSelectChange}
                        value={selectedAudio}
                    >
                        <option value="">Выберите аудио</option>

                        <option value={muz1}>Аудио 1</option>
                        <option value={muz2}>Аудио 2</option>
                        <option value={muz3}>Аудио 3</option>
                        <option value={muz4}>Аудио 4</option>
                        <option value={muz5}>Аудио 5</option>
                    </select>
                    <div className="ParentValue">
                        <div className="defaultValue">
                            <h3
                                style={{
                                    margin: "10px 0",
                                }}
                            >
                                1-смена
                            </h3>
                            <div className="">
                                <div className="">
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input1}
                                            onFocus={() => handleInputFocus(0)}
                                            onChange={(e) => handleInputChange("input1", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input2}
                                            onFocus={() => handleInputFocus(1)}
                                            onChange={(e) => handleInputChange("input2", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input3}
                                            onFocus={() => handleInputFocus(2)}
                                            onChange={(e) => handleInputChange("input3", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input4}
                                            onFocus={() => handleInputFocus(3)}
                                            onChange={(e) => handleInputChange("input4", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input5}
                                            onFocus={() => handleInputFocus(4)}
                                            onChange={(e) => handleInputChange("input5", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input6}
                                            onFocus={() => handleInputFocus(5)}
                                            onChange={(e) => handleInputChange("input6", e)}
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input7}
                                            onFocus={() => handleInputFocus(6)}
                                            onChange={(e) => handleInputChange("input7", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input8}
                                            onFocus={() => handleInputFocus(7)}
                                            onChange={(e) => handleInputChange("input8", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input9}
                                            onFocus={() => handleInputFocus(8)}
                                            onChange={(e) => handleInputChange("input9", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input10}
                                            onFocus={() => handleInputFocus(9)}
                                            onChange={(e) => handleInputChange("input10", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input11}
                                            onFocus={() => handleInputFocus(10)}
                                            onChange={(e) => handleInputChange("input11", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input12}
                                            onFocus={() => handleInputFocus(11)}
                                            onChange={(e) => handleInputChange("input12", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input13}
                                            onFocus={() => handleInputFocus(12)}
                                            onChange={(e) => handleInputChange("input13", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input14}
                                            onFocus={() => handleInputFocus(13)}
                                            onChange={(e) => handleInputChange("input14", e)}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="defaultValue">
                            <h3
                                style={{
                                    margin: "10px 0",
                                }}
                            >
                                2-смена
                            </h3>
                            <div className="parentGrid">
                                <div className="">
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input15}
                                            onFocus={() => handleInputFocus(14)}
                                            onChange={(e) => handleInputChange("input15", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input16}
                                            onFocus={() => handleInputFocus(15)}
                                            onChange={(e) => handleInputChange("input16", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input17}
                                            onFocus={() => handleInputFocus(16)}
                                            onChange={(e) => handleInputChange("input17", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input18}
                                            onFocus={() => handleInputFocus(17)}
                                            onChange={(e) => handleInputChange("input18", e)}
                                        />
                                    </div>
                                </div>
                                <div className="parentGrid">
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input19}
                                            onFocus={() => handleInputFocus(18)}
                                            onChange={(e) => handleInputChange("input19", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input20}
                                            onFocus={() => handleInputFocus(19)}
                                            onChange={(e) => handleInputChange("input20", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input21}
                                            onFocus={() => handleInputFocus(20)}
                                            onChange={(e) => handleInputChange("input21", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input22}
                                            onFocus={() => handleInputFocus(21)}
                                            onChange={(e) => handleInputChange("input22", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input23}
                                            onFocus={() => handleInputFocus(22)}
                                            onChange={(e) => handleInputChange("input23", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input24}
                                            onFocus={() => handleInputFocus(23)}
                                            onChange={(e) => handleInputChange("input24", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input25}
                                            onFocus={() => handleInputFocus(24)}
                                            onChange={(e) => handleInputChange("input25", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input26}
                                            onFocus={() => handleInputFocus(25)}
                                            onChange={(e) => handleInputChange("input26", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input27}
                                            onFocus={() => handleInputFocus(26)}
                                            onChange={(e) => handleInputChange("input27", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={mondayInputs.input28}
                                            onFocus={() => handleInputFocus(27)}
                                            onChange={(e) => handleInputChange("input28", e)}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <audio ref={audioRef} />
                    {selectedAudio && activeInput !== null && (
                        <button
                            style={{
                                margin: "5px 0 ",
                                fontSize: "18px",
                                color: "white",
                                background: "blue",
                                padding: "5px 20px",
                                borderRadius: "14px",
                            }}
                            onClick={handleStopAudio}
                        >
                            Остановить аудио
                        </button>
                    )}

                    <input
                        style={{
                            width: "20px",
                            height: "20px",
                            border: "2px solid blue",
                        }}
                        type="checkbox"
                        checked={disableAudioDays.monday}
                        onChange={() => {
                            handleCheckboxChange("monday");
                            setDisableAudioDays((prevDays) => ({
                                ...prevDays,
                                monday: !prevDays.monday,
                            }));
                        }}
                    />
                    <label
                        style={{
                            margin: "5px 0 ",
                            fontSize: "18px",
                            background: "red",
                            padding: "5px 20px",
                            borderRadius: "14px",
                        }}
                    >
                        Disable Audio
                    </label>
                </div>
            </center>
        </div>
    );
}

export default Monday;
