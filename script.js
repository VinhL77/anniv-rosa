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
