const upload = document.querySelector('.upload');
const fileInput = document.getElementById('file');
const selected = document.querySelector('.selected');

upload.addEventListener('click',() => {
    fileInput.click();
})

fileInput.onchange = ({target}) => {
    const fileDetails = target.files[0];
    if(fileDetails){
        const fileName = fileDetails.name;
        const selectedHTML = `<div>
        <img src='google-docs.png' alt='icon' height=30px width=30px/>
        <span class="result">${fileName}</span>
        </div>`;

        selected.innerHTML = selectedHTML;
    }
}