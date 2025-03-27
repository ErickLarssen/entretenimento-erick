function changeBg(bg, title){
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("../images/series/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content =>{
        content.classList.remove('active');
        if(content.classList.contains(title)){
            content.classList.add('active');
        }
    })

    // Se estiver no primeiro slide, aplica a imagem padrão
    if (title === 'home') {
        banner.style.background = `url("../images/erick¹.png") no-repeat`;
        banner.style.backgroundSize = '850px';
        banner.style.backgroundPosition = 'center';
    } else {
        // Caso contrário, muda para o fundo da série específica
        banner.style.background = `url("../images/series/${bg}")`;
        banner.style.backgroundSize = 'cover';
        banner.style.backgroundPosition = 'center';
    }

    // Alterando o conteúdo ativo
    contents.forEach(content => {
        content.classList.remove('active');
        if(content.classList.contains(title)){
            content.classList.add('active');
        }
    });
}


