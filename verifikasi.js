let a, b, benar;

function tatambahan() {
    a = Math.floor(Math.random() * 20);
b = Math.floor(Math.random() * 20);
    benar = a + b;
    document.getElementById("soal").innerHTML = `${a} + ${b} = ?`;
}

function cekJawaban() {
    let userAns = document.getElementById("jawaban").value;
    if (parseInt(userAns) === benar) {
        document.getElementById("botSay").innerHTML = "Jawabanmu sudah benar";
        soal.style.display = "none";
        jawaban.style.display = "none";
        button.style.display = "none";
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Sepertinya... Kita tidak bisa bermain sekarang... Karena...";
        }, 5000);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Kamu tahu...";
        }, 10000);
        setTimeout(function() {
            window.location.href = "naragadevounvila.html"
        }, 10500);
    } else {
        document.getElementById("botSay").innerHTML = "verifikasi gagal, coba lagi yah.";
    }
    document.getElementById("jawaban").value = "";
}

tatambahan();

document.getElementById("jawaban").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        cekJawaban();
    }
});