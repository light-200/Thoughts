const getImage = async () =>{
    const url = 'https://source.unsplash.com/1600x900/?asthetic';
    await fetch(url).then(data=>{
        const playground = document.querySelector('.playground');
        playground.style.backgroundImage = `url(${data.url})`;
    })
}

export default getImage;