function submitForm(form){
        console.log("form function")
        let cardContainer = form.closest('.card-container');
        let fields = [
            'organization',
            'fio',
            'position',
            'phone',
            'mail',
            'address'
        ]
        fields.forEach(f =>{
            cardContainer.querySelector('.card__' + f).textContent = form.elements[f].value;
        })

        let fioColor = cardContainer.querySelector('.form_radio_color [name="radio-fio"]:checked').value;
        cardContainer.querySelector('.card__fio').style.color = fioColor;
        let positionColor = cardContainer.querySelector('.form_radio_color [name="radio-position"]:checked').value;
        cardContainer.querySelector('.card__position').style.color = positionColor;
        let positionSize = cardContainer.querySelector('.form_radio_text_size [name="radio-position-size"]:checked').value;
        cardContainer.querySelector('.card__position').style.fontSize = positionSize;
        let positionAlign = cardContainer.querySelector('.form_radio_text_align [name="radio-position-align"]:checked').value;
        cardContainer.querySelector('.card__position').style.textAlign = positionAlign;
        if (cardContainer.querySelector('[name="checkbox-mail"]').checked)
            cardContainer.querySelector('.card__mail').textContent = '';
        if (cardContainer.querySelector('[name="checkbox-address"]').checked)
            cardContainer.querySelector('.card__address').textContent = '';

}