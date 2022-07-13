import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);
    
    //------First way
    // btn.addEventListener('click', function() {
    //     getResource('http://localhost:3000/styles') --> get from localhost
    //         .then(res => createCards(res))
    //         .catch(error => console.log(error));
        
    //     this.remove();
    // });

    //-----Second
     btn.addEventListener('click', function() {
        getResource('assets/db.json') //-->link to file
            .then(res => createCards(res.styles)) //--> path to arr styles
            .catch(error => console.log(error));
        
       this.remove();
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
        
            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        
        })
    }
};

export default showMoreStyles;