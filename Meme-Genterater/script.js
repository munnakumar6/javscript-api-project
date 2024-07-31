document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('btn');
    let titleheading = document.querySelector('.meme-title');
    let image = document.querySelector('.meme-image');
  
    async function MemeGenerator() {
      try {
        const response = await fetch('https://meme-api.com/gimme/wholesomememes');
        const data = await response.json();
        const { title, url } = data;
        titleheading.innerText = title;
        image.src = url;
      } catch (error) {
        console.log(error);
      }
    }
  
    btn.addEventListener('click', () => {
      MemeGenerator();
    });
  
    MemeGenerator();
  });
  