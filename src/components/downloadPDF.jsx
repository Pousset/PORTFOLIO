import React from "react";

const PDF = () => {

    // Function will execute on click of button
    const onButtonClick = () => {
    
        // using Java Script method to get PDF file
        fetch("../../public/CV_Piette.pdf").then((response) => {
            response.blob().then((blob) => {
            
                // Creating new object of PDF file
                const fileURL = 
                    window.URL.createObjectURL(blob);
                    
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "CV_Piette.pdf";
                alink.click();
            });
        });
    };
    return (
        <>
            <center>
                <h1>
                    Cliquer sur le button pour garder un souvenir de mon CV
                </h1>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
    <br /> <br /> <br />
            </center>
        </>
    );
};

export default PDF;
