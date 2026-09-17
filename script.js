function entrerSurLeSite() {
    document.getElementById('login-screen').style.display = 'none';
    
    const introScreen = document.getElementById('intro-screen');
    const logoIntro = document.querySelector('.intro-logo');
    
    logoIntro.style.animation = 'none';
    logoIntro.offsetHeight; 
    logoIntro.style.animation = null; 

    introScreen.style.display = 'flex';
    
    setTimeout(function() {
        introScreen.style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 4000);
}

function retourAuProfil() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';
}
// --- 1. LE CODE DU CURSEUR MAGIQUE ---
const cursor = document.getElementById('magic-cursor');

// À chaque fois que la souris bouge sur le site, l'aura la suit !
document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// --- 2. LE SCÉNARIO D'ENTRÉE ---
function entrerSurLeSite() {
    document.getElementById('login-screen').style.display = 'none';
    
    const introScreen = document.getElementById('intro-screen');
    const logoIntro = document.querySelector('.intro-logo');
    
    logoIntro.style.animation = 'none';
    logoIntro.offsetHeight; 
    logoIntro.style.animation = null; 

    introScreen.style.display = 'flex';
    
    setTimeout(function() {
        introScreen.style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 4000);
}

function retourAuProfil() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';
}

// --- 3. LE LECTEUR VIDÉO / PHOTO ---
// Cette fonction se déclenche quand tu cliques sur une carte "Famille"
function ouvrirModal(type, nomFichier) {
    const modal = document.getElementById('media-modal');
    const modalBody = document.getElementById('modal-body');
    
    // Si c'est une vidéo (.mp4)
    if(type === 'video') {
        modalBody.innerHTML = `
            <video controls autoplay>
                <source src="${nomFichier}" type="video/mp4">
                Ton navigateur ne supporte pas la vidéo.
            </video>
        `;
    } 
    // Si c'est une photo (.jpg, .png)
    else if (type === 'photo') {
        modalBody.innerHTML = `<img src="${nomFichier}" alt="Souvenir">`;
    }
    
    // On affiche la fenêtre noire par-dessus le site
    modal.style.display = 'flex';
}

// Quand on clique sur la petite croix (×)
function fermerModal() {
    const modal = document.getElementById('media-modal');
    const modalBody = document.getElementById('modal-body');
    
    modal.style.display = 'none';
    // Très important : ça coupe la vidéo (le son) quand on ferme la fenêtre !
    modalBody.innerHTML = ''; 
}
