import React from "react";

const Terminal = ({ userData, selected }) => {
    const selectedData = selected === "All" ? userData : userData[selected];
    const jsonCode = JSON.stringify(selectedData, null, 4);
    //const parsedCode = JSON.parse(jsonCode, null);
    //var photos = parsedCode.photos;

    // var getPhoto = (href) => {
    //     var temp = document.createElement("a");
    //     temp.href = href;
    //     console.log(temp);
    //     return temp;
    // };

    // var photo = userData.photos.filter((item) => {
    //     return item;
    // };

    // //var largePhoto = userData.photos;
    // var profilePhoto = getPhoto(photo);

    return (
        <div className="window">
            <div className="title-bar">
                <div className="buttons">
                    <div className="mac-btn close" />
                    <div className="mac-btn minimize" />
                    <div className="mac-btn zoom" />
                </div>
                <p style={{ textAlign: "center", margin: 0 }}>
                    json-terminal
                </p>
            </div>
            <div className="content">
                <pre>{jsonCode}</pre>
            </div>
        </div>
    );
};

export default Terminal;