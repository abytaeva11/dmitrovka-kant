import React, { useEffect, useState } from "react";
import { useAppContext } from "../global/AppContext";
import "../App.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import muz1 from "../assets/img/Мирбек Атабеков - Таласым.mp3";
import muz2 from "../Асылбек Насирдинов - Улуу көч.mp3";
import muz3 from "../кыргызский-оозкомуз_(muzmo.su).mp3";
import muz4 from "../нурак-комузкууу_(muzmo.su).mp3";
import muz5 from "../kyrgyzskaya-narodnaya-muzyka-esimde.mp3";
import "../components/DefaultValue.css";


import "../components/DefaultValue.css";
import muz6 from "../assets/img/6.mpeg";
import muz7 from "../assets/img/ozon.mp3"

// import muz7 from "../assets/img/7.mpeg";
// import muz8 from "../assets/img/8.aac";
// import muz9 from "../assets/img/9.aac";
// import muz10 from "../assets/img/9.mpeg";

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function Thuesday({disableAudioDays, setDisableAudioDays}) {
    const {
        selectedAudio,
        currentTime,
        activeInput,
        disableAudio,
        audioRef,
        handleSelectChange,
        handleStopAudio,
        handleInputFocus,
        setActiveInput,

        // disableAudioDays,

        handleCheckboxChange,




        handleDisableAudioChange,

    } = useAppContext();
    const handleInputChange = (inputName, event) => {
        const { value } = event.target;
        setThuesdayInputs((prevInputs) => ({
            ...prevInputs,
            [inputName]: value,
        }));
    };

    useEffect(() => {
        const savedInputs = localStorage.getItem("thuesdayInputs");
        if (savedInputs) {
            setThuesdayInputs(JSON.parse(savedInputs));
        }
    }, []);

    const [thuesdayInputs, setThuesdayInputs] = useState(() => {
        const savedInputs = localStorage.getItem("thuesdayInputs");
        return savedInputs
            ? JSON.parse(savedInputs)
            : {
                input1: "08:00",
                input2: "08:45",
                input3: "08:50",
                input4: "09:35",
                input5: "09:40",
                input6: "10:25",
                input7: "10:30",
                input8: "11:15",
                input9: "11:20",
                input10: "12:05",
                input11: "12:10",
                input12: "12:55",
                input13: "13:20",
                input14: "14:05",
                input15: "14:10",
                input16: "14:55",
                input17: "15:00",
                input18: "15:45",
                input19: "15:50",
                input20: "16:35",
                input21: "16:40",
                input22: "17:25",
                input23: "17:30",
                input24: "18:15",
            };
    });

    useEffect(() => {
        localStorage.setItem("thuesdayInputs", JSON.stringify(thuesdayInputs));
    }, [thuesdayInputs]);

    useEffect(() => {
        const currentDayOfWeek = daysOfWeek[new Date().getDay()];
        if (currentDayOfWeek === "Thuesday") {
            const inputs = document.querySelectorAll("input[type='time']");
            inputs.forEach((input, index) => {
                if (input.value === currentTime && !disableAudio && !disableAudioDays.thuesday) {
                    setActiveInput(index);
                    if (selectedAudio) {
                        handlePlayAudio(selectedAudio);
                        setTimeout(handleStopAudio, 60000);
                    }
                }
            });
        }
    }, [currentTime, selectedAudio, disableAudio, disableAudioDays.thuesday]);

    const handlePlayAudio = (audioFile) => {
        audioRef.current.src = audioFile;
        audioRef.current.play();
    };
    return (
        <div>
            <center>
                <div className="card">
                    <p className="card__name">
                        {currentTime && (
                            <h2 className="title">{currentTime}</h2>
                        )}
                        <h3 className="subtitle">Вторник</h3>
                    </p>
                    <select style={{
                        background:"white",
                        color:"black",
                        padding:"5px 10px",
                        border:"none",
                        position:"absolute",
                        marginLeft:"-498px",
                        marginTop:"75px"
                    }} onChange={handleSelectChange} value={selectedAudio}>
                        <option value="">Выберите аудио</option>
                        {/*<option value={muz1}>Аудио 1</option>*/}
                        {/*<option value={muz2}>Аудио 2</option>*/}
                        {/*<option value={muz3}>Аудио 3</option>*/}
                        {/*<option value={muz4}>Аудио 4</option>*/}
                        {/*<option value={muz5}>Аудио 5</option>*/}

                        <option value={muz1}>Обон 1</option>
                        <option value={muz2}>Обон 2</option>
                        <option value={muz3}>Обон 3</option>
                        <option value={muz4}>Обон 4</option>
                        <option value={muz5}>Обон 5</option>
                        <option value={muz6}>Обон 6</option>
                        <option value={muz7}>Обон 7</option>
                        {/*<option value={muz8}>Обон 8</option>*/}
                        {/*<option value={muz9}>Обон 9</option>*/}
                        {/*<option value={muz10}>Обон 10</option>*/}

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
                                            defaultValue={thuesdayInputs.input1}
                                            onFocus={() => handleInputFocus(0)}
                                            onChange={(e) => handleInputChange("input1", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input2}
                                            onFocus={() => handleInputFocus(1)}
                                            onChange={(e) => handleInputChange("input2", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input3}
                                            onFocus={() => handleInputFocus(2)}
                                            onChange={(e) => handleInputChange("input3", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input4}
                                            onFocus={() => handleInputFocus(3)}
                                            onChange={(e) => handleInputChange("input4", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input5}
                                            onFocus={() => handleInputFocus(4)}
                                            onChange={(e) => handleInputChange("input5", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input6}
                                            onFocus={() => handleInputFocus(5)}
                                            onChange={(e) => handleInputChange("input6", e)}
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input7}
                                            onFocus={() => handleInputFocus(6)}
                                            onChange={(e) => handleInputChange("input7", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input8}
                                            onFocus={() => handleInputFocus(7)}
                                            onChange={(e) => handleInputChange("input8", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input9}
                                            onFocus={() => handleInputFocus(8)}
                                            onChange={(e) => handleInputChange("input9", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input10}
                                            onFocus={() => handleInputFocus(9)}
                                            onChange={(e) => handleInputChange("input10", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input11}
                                            onFocus={() => handleInputFocus(10)}
                                            onChange={(e) => handleInputChange("input11", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input12}
                                            onFocus={() => handleInputFocus(11)}
                                            onChange={(e) => handleInputChange("input12", e)}
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
                                            defaultValue={thuesdayInputs.input13}
                                            onFocus={() => handleInputFocus(12)}
                                            onChange={(e) => handleInputChange("input13", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input14}
                                            onFocus={() => handleInputFocus(13)}
                                            onChange={(e) => handleInputChange("input14", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input15}
                                            onFocus={() => handleInputFocus(14)}
                                            onChange={(e) => handleInputChange("input15", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input16}
                                            onFocus={() => handleInputFocus(15)}
                                            onChange={(e) => handleInputChange("input16", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input17}
                                            onFocus={() => handleInputFocus(16)}
                                            onChange={(e) => handleInputChange("input17", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input18}
                                            onFocus={() => handleInputFocus(17)}
                                            onChange={(e) => handleInputChange("input18", e)}
                                        />
                                    </div>
                                </div>
                                <div className="parentGrid">
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input19}
                                            onFocus={() => handleInputFocus(18)}
                                            onChange={(e) => handleInputChange("input19", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input20}
                                            onFocus={() => handleInputFocus(19)}
                                            onChange={(e) => handleInputChange("input20", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input21}
                                            onFocus={() => handleInputFocus(20)}
                                            onChange={(e) => handleInputChange("input21", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input22}
                                            onFocus={() => handleInputFocus(21)}
                                            onChange={(e) => handleInputChange("input22", e)}
                                        />
                                    </div>
                                    <div className="grid">
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input23}
                                            onFocus={() => handleInputFocus(22)}
                                            onChange={(e) => handleInputChange("input23", e)}
                                        />
                                        <input
                                            type="time"
                                            defaultValue={thuesdayInputs.input24}
                                            onFocus={() => handleInputFocus(23)}
                                            onChange={(e) => handleInputChange("input24", e)}
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
                        checked={disableAudioDays.thuesday}
                        onChange={() => {
                            handleCheckboxChange("thuesday");
                            setDisableAudioDays((prevDays) => ({
                                ...prevDays,
                                thuesday: !prevDays.thuesday,
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

export default  Thuesday;