import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function QRCodeGenerator() {
    const [text, setText] = useState("");
    const [showColors, setShowColors] = useState(false);
    const [qrColor, setQrColor] = useState("black");

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center vh-100"
            style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20231110/pngtree-abstract-light-colored-paint-texture-background-wallpaper-image_13802780.png')" ,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"}}>
                
                <h4 className="mb-4 text-center fst-italic text-black fw-bold">QR Code Generator</h4>

                <div className="d-flex flex-column align-items-center w-75">

                    <input
                        type="text"
                        className="form-control rounded border-primary mb-3 w-25 fst-italic text-center fs-5"
                        placeholder="Enter text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}/>

                    <button
                        className="btn btn-primary mb-3 fst-italic fs-6"
                        onClick={() => setShowColors(!showColors)}><b>Select Color</b>
                    </button>

                    {showColors && (
                        <div className="mb-3 d-flex flex-wrap justify-content-center">
                            <button className="btn btn-dark mx-1"
                                onClick={() => setQrColor("black")}></button>

                            <button className="btn btn-danger mx-1 "
                                onClick={() => setQrColor("red")}></button>

                            <button className="btn mx-1"
                                onClick={() => setQrColor("yellow")} style={{ backgroundColor: "yellow" }}></button>

                            <button className="btn mx-1"
                                onClick={() => setQrColor("purple")} style={{ backgroundColor: "purple",height:"35px"}}></button>

                            <button className="btn btn-success mx-1"
                                onClick={() => setQrColor("green")}></button>

                            <button className="btn btn-warning mx-1"
                                onClick={() => setQrColor("orange")}></button>
                            
                        </div>
                    )}

                    {text && (
                        <div className="mt-4 text-center">
                            <QRCodeCanvas
                                value={text}
                                fgColor={qrColor} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}