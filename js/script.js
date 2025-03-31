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

    // Dinamismo das modais

    // Abrir modais
document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });
  
  // Fechar modais
  document.querySelectorAll('.close-btn').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.style.display = 'none';
    });
  });
  
  // Fechar modal ao clicar fora dela
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });  
}


