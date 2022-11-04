window.onload = function () {

    const setBackgroundColor = (color) => {
        let main = document.querySelector("#main")
        main.style.backgroundColor = color
        localStorage.setItem("backgroundColor", color)
    }

    const setFontColor = (color) => {
        let main = document.querySelector("#main")
        main.style.color = color
        localStorage.setItem("fontColor", color)
    }

    const setFontSize = (size) => {
        let main = document.querySelector("#main")
        main.style.fontSize = size
        localStorage.setItem("fontSize", size)
    }

    const setLineHeight = (height) => {
        let main = document.querySelector("#main")
        main.style.lineHeight = height
        localStorage.setItem("lineHeight", height)
    }

    const setFontFamily = (font) => {
        let main = document.querySelector("#main")
        main.style.fontFamily = font
        localStorage.setItem("fontFamily", font)
    }



    //BACKGROUND COLOR
    let backgroundColors = document.querySelectorAll("#background-color>button")
    for (let i = 0; i < backgroundColors.length; i++) {
        backgroundColors[i].addEventListener("click", (event) => {
            setBackgroundColor(event.target.innerText)
        });
    };

    //FONT COLOR
    let fontColors = document.querySelectorAll("#font-color>button")
    for (let i = 0; i < fontColors.length; i++) {
        fontColors[i].addEventListener("click", (event) => {
            setFontColor(event.target.innerText);
        });
    }

    //FONT SIZE
    let fontSizes = document.querySelectorAll("#font-size>button");
    for (let i = 0; i < fontSizes.length; i++) {
        fontSizes[i].addEventListener("click", (event) => {
            setFontSize(event.target.innerText);
        });
    };

    //LINE HEIGHT
    let lineHeights = document.querySelectorAll("#line-height>button");
    for (let i = 0; i < lineHeights.length; i++) {
        lineHeights[i].addEventListener("click", (event) => {
            if (event.target.innerText == "Default") {
                setLineHeight("1.14");
            } else {
                setLineHeight(event.target.innerText);
            }
        });
    }

    //FONT FAMILY
    let fontTypes = document.querySelectorAll("#font-type>button")
    for (let i = 0; i < fontTypes.length; i++) {
        fontTypes[i].addEventListener("click", (event) => {
            setFontFamily(event.target.innerText);
        })
    };

    const pageOnload = () => {
        const backgroundColor = localStorage.getItem('backgroundColor');
        setBackgroundColor(backgroundColor);

        const fontColor = localStorage.getItem('fontColor');
        setFontColor(fontColor);

        const fontSize = localStorage.getItem('fontSize');
        setFontSize(fontSize);

        const lineHeight = localStorage.getItem('lineHeight');
        setLineHeight(lineHeight);

        const fontFamily = localStorage.getItem('fontFamily');
        setFontFamily(fontFamily);
    }
    pageOnload();
//End.onload
}