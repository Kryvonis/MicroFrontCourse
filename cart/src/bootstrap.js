import faker from 'faker';

const mount = (el) => {
    const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`
    el.querySelector('#dev-cart').innerHTML = cartText;
}
// Local
if(process.env.NODE_ENV === 'development'){
    
}
// Prod

export const { mount }