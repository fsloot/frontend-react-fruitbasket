import React from "react";

function FoodButton({ fruitButtonCSS, imgPlusTitle, buttonDecrement, setFruit, fruit, buttonIncrement, notEnabled }) {

    return (
        <div className={fruitButtonCSS}>
            <h2>{imgPlusTitle}</h2>
            <button
                onClick={() => setFruit(fruit - 1)}
                disabled={notEnabled}>
                {buttonDecrement}
            </button>
            <p>{fruit}</p>
            <button onClick={() => setFruit(fruit + 1)}>
                {buttonIncrement}
            </button>
        </div>
    )
}

export default FoodButton;