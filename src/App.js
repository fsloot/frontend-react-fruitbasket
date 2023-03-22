import React, { useState } from "react";
import './App.css';
import FoodButton from "./components/FoodButton";
import FormField from "./components/FormField";
// import FormDropDown from "./components/FormDropDown";

function App() {

    const [strawberries, setStrawberries] = useState(0);
    const [apples, setApples] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [kiwis,setKiwis] = useState(0);

    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age: 0,
        zipcode: '',
        deliveryFrequency: 'Iedere week',
        timeOfDay: 'Overdag',
        remark: '',
        conditions: false,
    });

    function resetFruits () {
        setStrawberries(0)
        setApples(0)
        setBananas(0)
        setKiwis(0)
    }

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const checkBoxValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: checkBoxValue,
        });
    }

    // function dropDown(optionValue, optionDescription) {
    //     return (
    //         <option
    //             value={optionValue}
    //         >{optionDescription}
    //         </option>
    //     )
    // }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="app">
                <FoodButton
                    fruitButtonCSS="buttons"
                    imgPlusTitle="🍓 Aardbeien"
                    buttonDecrement="-"
                    setFruit={setStrawberries}
                    fruit={strawberries}
                    buttonIncrement="+"
                    notEnabled={strawberries === 0}
                />
                <FoodButton
                fruitButtonCSS="buttons"
                imgPlusTitle="🍏 Appels"
                buttonDecrement="-"
                setFruit={setApples}
                fruit={apples}
                buttonIncrement="+"
                notEnabled={apples === 0}
            />
                <FoodButton
                    fruitButtonCSS="buttons"
                    imgPlusTitle="🍌 Bananen"
                    buttonDecrement="-"
                    setFruit={setBananas}
                    fruit={bananas}
                    buttonIncrement="+"
                    notEnabled={bananas === 0}
                />
                <FoodButton
                    fruitButtonCSS="buttons"
                    imgPlusTitle="🥝 Kiwis"
                    buttonDecrement="-"
                    setFruit={setKiwis}
                    fruit={kiwis}
                    buttonIncrement="+"
                    notEnabled={kiwis === 0}
                />
                <button type="button" onClick={resetFruits}>Reset</button>
            </div>
        <div>
            <form className="dataform">
                <FormField
                    labelFor="form-firstname"
                    labelDescription="Voornaam:"
                    inputType="text"
                    labelName="firstname"
                    labelValue={formState.firstname}
                    labelChange={handleChange}
                />
                <FormField
                    labelFor="form-lastname"
                    labelDescription="Achternaam:"
                    inputType="text"
                    labelName="lastname"
                    labelValue={formState.lastname}
                    labelChange={handleChange}
                />
                <FormField
                    labelFor="form-age"
                    labelDescription="Leefdtijd:"
                    inputType="text"
                    labelName="age"
                    labelValue={formState.age}
                    labelChange={handleChange}
                />
                <FormField
                    labelFor="form-zipcode"
                    labelDescription="Postcode"
                    inputType="text"
                    labelname="zipcode"
                    labelvalue={formState.zipcode}
                    labelChange={handleChange}
                />

                {/*Heb helaas niet voldoende tijd gehad om dropdown-menu uit te werken*/}
                {/*Onderstaande werkt maar dan heb je veel optionValue's en -Descriptions nodig*/}

                {/*<FormDropDown*/}
                {/*    labelFor="form-delivery-frequency"*/}
                {/*    labelName="deliveryFrequency"*/}
                {/*    labelValue={formState.deliveryFrequency}*/}
                {/*    labelChange={handleChange}*/}
                {/*    optionValue="everyWeek"*/}
                {/*    optionDescription="Iedere week"*/}
                {/*/>*/}

                <label htmlFor="form-delivery-frequency">Bezorgfrequentie</label>
                <select
                    id="form-delivery-frequency"
                    name="deliveryFrequency"
                    value={formState.deliveryFrequency}
                    onChange={handleChange}>
                    <option value="EveryWeek">Iedere week</option>
                    <option value="EveryOtherWeek">Om de week</option>
                    <option value="EveryMonth">Iedere maand</option>
                </select>

                {/*Onderstaande radiobuttons werken op deze manier helaas nog niet goed genoeg*/}

                <FormField
                    labelFor="form-daytime"
                    labelDescription="Overdag"
                    inputType="radio"
                    labelname="timeOfDay"
                    labelvalue="Overdag"
                    labelChecked={formState.timeOfDay === "Overdag"}
                    labelChange={handleChange}
                />
                <FormField
                    labelFor="form-nighttime"
                    labelDescription="'s Avonds"
                    inputType="radio"
                    labelname="timeOfDay"
                    labelvalue="'s Avonds"
                    labelChecked={formState.timeOfDay === "'s Avonds"}
                    labelChange={handleChange}
                />

                {/*<label htmlFor="form-daytime">*/}
                {/*    Overdag*/}
                {/*    <input*/}
                {/*        id="form-daytime"*/}
                {/*        type="radio"*/}
                {/*        name="timeOfDay"*/}
                {/*        value="Overdag"*/}
                {/*        checked={formState.timeOfDay === "Overdag"}*/}
                {/*        onChange={handleChange}*/}
                {/*    />*/}
                {/*</label>*/}
                {/*<label htmlFor="form-nighttime">*/}
                {/*    's Avonds*/}
                {/*    <input*/}
                {/*        id="form-nighttime"*/}
                {/*        type="radio"*/}
                {/*        name="timeOfDay"*/}
                {/*        value="'s Avonds"*/}
                {/*        checked={formState.timeOfDay === "'s Avonds"}*/}
                {/*        onChange={handleChange}*/}
                {/*    />*/}
                {/*</label>*/}

                {/*Helaas geen tijd gehad om de rest ook goed uit tew erken*/}
                <label htmlFor="form-textarea">
                    Opmerking
                    <textarea
                        id="form-textarea"
                        name="remark"
                        rows="4"
                        cols="30"
                        value={formState.remark}
                        onChange={handleChange}
                        />
                </label>
                <label htmlFor="form-agree-conditions">
                    <input
                        id="form-agree-conditions"
                        type="checkbox"
                        name="conditions"
                        checked={formState.conditions}
                        onChange={handleChange}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                <button type="submit">Verzenden</button>

            </form>
            </div>
            </>
    );
}

export default App;
