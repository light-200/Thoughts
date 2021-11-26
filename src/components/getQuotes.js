const getQuotes = async () => {
    let url = 'https://api.quotable.io/random';
    await fetch(url).then(
        response => response.json()
        ).then(data =>{ 
            const playground = document.querySelector('.playground');
            playground.innerText = data.content;
            return data;
        }).catch(
            error =>console.error(error)
        );
}
 
export default getQuotes;