const kodeBenar = "Mati";
const jawaban = document.getElementById("jawabanUser");
const konten = document.getElementById("konten");

function klikUser() {
    
    const nilaiInput = jawaban.value.trim();
    jawaban.classList.remove("error");
    konten.style.display = "none";

    if (nilaiInput === "") {
        pContent.style.display = "block";
        pContent.focus();
        pContent.innerHTML = "tik dulu kodenya kocak";
        jawaban.classList.add("error");
        setTimeout(function() {
            pContent.style.display = "none";
        }, 5000);
        return;
    }

    if (nilaiInput === kodeBenar) {
        konten.style.display = "block";
        cardKontent.style.display = "block";
        berangkas.style.display = "block";
        card.style.display = "none";
    } 
    
    else {
        pContent.style.display = "block";
        pContent.innerHTML = "kodenya salah/kodenya berbentuk kapital"
        jawaban.value = "";
        pContent.focus();
        jawaban.classList.add("error");
    }
}

document.getElementById("jawabanUser").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        klikUser()
    }
});