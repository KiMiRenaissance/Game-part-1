const dialog = document.getElementById('favDialog');
const showButton = document.getElementById('showDialog');
const closeButton = document.getElementById('closeDialog');
const buttonImg = document.getElementById('buttonImg');

    showButton.addEventListener('click', () => {
        dialog.showModal();
        
    });
    
    closeDialog.addEventListener('click', () => {
    dialog.close();
    alert(`perhatikan judul di setiap website yang aku arahkan!`)
    setTimeout(() => {
        window.location.href = "verifikasi.html";
    }, 1500);
    showDialog.style.display = 'none';
    buttonImg.style.display = 'block';
    });