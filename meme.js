const form = document.querySelector('#memeForm');
const imageInput = document.querySelector("#imageFileInput");
const topInput = document.querySelector('input[name="topText"]');
const bottomInput = document.querySelector('input[name="bottomText"]');
const results = document.querySelector('#results');


form.addEventListener("submit", function(event){
    event.preventDefault();
    let removeDiv = document.createElement('div');

    const newMeme = makeMeme(
        imageInput.files[0].name, 
        topInput.value, 
        bottomInput.value
    );
    newMeme.appendChild(removeDiv);
    results.appendChild(newMeme);

    imageInput.value ='';
    topInput.value =''; 
    bottomInput.value ='';
  
    removeDiv.classList.add("black-cross");
    removeDiv.innerText = "X";
    removeDiv.style.color = "black";

function remove(event) {
    event.target.parentNode.remove();
}

results.addEventListener('click', remove, false);
});

function makeMeme(src, topText, bottomText) {

    let img = document.createElement('img');
    img.setAttribute('src', src);

    let topTextDiv = document.createElement('div');
    topTextDiv.setAttribute('class', 'topText');

    let bottomTextDiv = document.createElement('div');
    bottomTextDiv.setAttribute('class', 'bottomText');

    const meme = document.createElement('div');
    meme.setAttribute('class', 'meme');

    topTextDiv.innerText = topText;
    bottomTextDiv.innerText = bottomText;

    meme.appendChild(img);
    meme.appendChild(topTextDiv);
    meme.appendChild(bottomTextDiv);
    return meme;
}



