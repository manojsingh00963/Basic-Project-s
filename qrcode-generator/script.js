let box = document.querySelector(".box")
let closebtn = document.getElementById("closebtn")
function generateqr() {
    let rawdata = document.getElementById("input-text").value;
    let qrelement = document.getElementById("qr-code");
    
    qrelement.innerHTML = "";
    
    if (rawdata.trim() === "") {
        alert("Please enter some text to generate a QR code.");
        return;
    }
    else{
    if( new QRCode(qrelement, {
        text: rawdata,
        width: 150, // Smaller size
        height: 150,
        colorDark: "#060125",
        colorLight: "#f5f4ff",
    })){
        setTimeout(() => {
            alert("QR code generated successfully").alert(closed);

        }, 800);
        closebtn.style.display = "block";
        box.innerHTML = "";
        qrelement.style.backgroundColor = "#ffffff";
        qrelement.style.padding = "20px";
        qrelement.style.outline = "2px double black";
        qrelement.style.outlineOffset = "-10px";
    }
}
}

function closeWin() {
    // myWindow.close();
    location.reload()
}