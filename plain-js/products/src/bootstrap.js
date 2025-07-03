import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

/* 
Context/Situation 1
We are running this file in development in isolation, definetly we have our local index.html file
Context/Situation 2
We are running in production through container app and there is no gurantee element with same id exists
*/

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products-dev-only");
  if (el) {
    // we are running in isolation
    mount(el);
  }
}

export { mount };
