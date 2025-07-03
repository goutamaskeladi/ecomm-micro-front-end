import { mount as mountProducts } from "productsApp/ProductsList";
import { mount as mountCart } from "cartApp/CartShow";

mountProducts(document.querySelector("#dev-products"));
mountCart(document.querySelector("#dev-cart"));
