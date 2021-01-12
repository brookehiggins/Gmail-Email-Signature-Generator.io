

updateNameValue = (e) => {
    document.getElementById('name').innerHTML = e.target.value
};

const nameInput = document.getElementById('nameInput')
nameInput.addEventListener('keyup', updateNameValue)


updateTitleValue = (e) => {
    document.getElementById('title').innerHTML = e.target.value
};

const titleInput = document.getElementById('titleInput')
titleInput.addEventListener('keyup', updateTitleValue)

updateCompanyValue = (e) => {
    document.getElementById('company').innerHTML = e.target.value
};

const companyInput = document.getElementById('companyInput')
companyInput.addEventListener('keyup', updateCompanyValue)


updatePhoneNumberValue = (e) => {
    document.getElementById('phoneNumber').innerHTML = e.target.value
};

const phoneNumberInput = document.getElementById('phoneNumberInput')
phoneNumberInput.addEventListener('keyup', updatePhoneNumberValue)

updateEmailValue = (e) => {
    document.getElementById('email').innerHTML = e.target.value
};

const emailInput = document.getElementById('emailInput')
emailInput.addEventListener('keyup', updateEmailValue)

// const toBase64 = file => new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = error => reject(error);
// });

updateImageValue = (e) => {
    document.getElementById('yourImage').src = e.target.value
};

const imageInput = document.getElementById('imageInput')
imageInput.addEventListener('keyup', updateImageValue)


updateButton = (e) => {
    const value = document.getElementById('colorPicker').src = e.target.value;
    const btn = document.getElementById('btn');
    const line = document.getElementById('line');
    btn.style['background-color'] = value;
    line.style['color'] = value;
};

const picker = document.getElementById('colorPicker')
picker.addEventListener('change', updateButton)

updateLink = (e) => {
    const value2 = document.getElementById('hrefInput').src = e.target.value;
    const btnLink = document.getElementById('buttonLink');
    btnLink.href = value2;
};

const hrefUrl = document.getElementById('hrefInput')
hrefUrl.addEventListener('change', updateLink)

// updateButtonWordsValue = (e) => {
//     document.getElementsByClassName('btnwrds').innerHTML = e.target.value
// };

// const buttonWordsInput = document.getElementById('buttonWordsInput')
// buttonWordsInput.addEventListener('keyup', updateButtonWordsValue)

updateButtonWords = (e) => {
    const value3 = document.getElementById('buttonWordsInput').innerHTML = e.target.value;
    const span = document.getElementById('buttonLink');
    span.innerText = span.textContent = value3
};

const buttonWords = document.getElementById('buttonWordsInput')
buttonWords.addEventListener('change', updateButtonWords)
