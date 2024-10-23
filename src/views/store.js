//STORE

import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { openModal } from "./modal";

//funcion que se encarga de traer los elementos y traer al render
export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}
//se encarga de filtrar y renderizar la sección con todos sus respectivos elementos
export const handleRenderList = (productosIn) => {
    //filtrado de arrays por categoría
    const burgers = productosIn.filter((el) => el.categories == "Hamburguesas");
    const papas = productosIn.filter((el) => el.categories == "Papas");
    const gaseosas = productosIn.filter((el) => el.categories == "Gaseosas");
    //renderiza los elementos de la sección
    const renderProductsGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `
                <div class='containerTargetItem' id="product-${producto.categories}-${index}">
                    <div>
                        <img src='${producto.imagen}' />
                        <div>
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class='targetProps'>
                            <p><b>Precio:<b/> $ ${producto.precio}</p>
                        </div>
                    </div>
                </div>
                `;
            });
            //devuelve la sección con todos los elementos dentro
            return `
            <section class='sectionStore'>
                <div class='containerTitleSection'>
                    <h3>${title}</h3>
                </div>
                <div class='containerProductStore'>
                    ${productosHTML.join("")}
                </div>
            </section>
            `;
        } else {
            return "";
        }
    };

    //renderizar cada uno de los productos dentro de su categoría
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductsGroup(burgers, "Hamburguesas")}
    ${renderProductsGroup(papas, "Papas")}
    ${renderProductsGroup(gaseosas, "Gaseosas")}

    `;
    //añaden los eventos de manera dinámica
    const addEvents = (productsIn) => {
        if (productsIn) {
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.categories}-${index}`)
                productContainer.addEventListener("click", () => {
                    setProductoActivo(element);
                    openModal();
                });
            });
        }

    };
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};