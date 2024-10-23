//GUARDAR O MODIFICAR ELEMENTOS

import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

//PRODUCTOS

//GUARDAR
 const aceptButton = document.getElementById("aceptButton");
 aceptButton.addEventListener("click", ()=>{
    handleSaveOrModifiyElements();
 })
 
//FUNCION DE GUARDAR
 const handleSaveOrModifiyElements = ()=>{
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categories = document.getElementById("categoria").value;
    
    let object = null;

    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories
        }
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories
        }
    }
    Swal.fire({
        title: "¡Correcto!",
        text: "¡Producto guardado correctamente!",
        icon: "success"
      });

     
    setInLocalStorage(object);

    handleGetProductsToStore();
    closeModal();
 };

 //ELIMINAR
 export const handleDeleteProduct = ()=>{

    Swal.fire({
        title: "¿Desea eliminar el elemento?",
        text: "Si lo eliminas, será permanentemente.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminarlo!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el)=> el.id !== productoActivo.id);
            //setear el nuevo array
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }else{
            closeModal();
        }
        
      });


 }