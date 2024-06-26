document.addEventListener("DOMContentLoaded", () => {
    const agregarProductoAlcarrito = document.querySelectorAll(".add-to-cart");
    const mostrarPoductosAlcarrito = document.getElementById("cart-list");
    const mostrarTotal = document.getElementById("total");

    let productoAgregadosAlCarrito = []


    agregarProductoAlcarrito.forEach(boton => {
        boton.addEventListener("click", () => {
            const nombreDelProducto = boton.getAttribute("data-name")
            const precioDelProducto = parseFloat(boton.getAttribute("data-price"))

            const producto = {
                nombre: nombreDelProducto,
                precio: precioDelProducto,
                cantidad: 1
            }

            const productoexisteAlcarrito = productoAgregadosAlCarrito.find(producto => {
                return producto.nombre === nombreDelProducto;
            })

            if (productoexisteAlcarrito) {
                productoAgregadosAlCarrito = productoAgregadosAlCarrito.map(producto => {
                    if (producto.nombre === nombreDelProducto) {
                        return { ...producto, cantidad: producto.cantidad + 1 }
                    }
                    return producto
                })
            } else {
                productoAgregadosAlCarrito = [...productoAgregadosAlCarrito, producto]
            }

            actualizarCarrito()
        })
    })


    function actualizarCarrito() {
        mostrarPoductosAlcarrito.innerHTML = "";
        let total = 0;

        productoAgregadosAlCarrito.forEach((producto) => {
            const li = document.createElement("li");
            li.textContent = ` Cantidad   ${producto.cantidad} ${producto.nombre} $${producto.precio}`
            mostrarPoductosAlcarrito.appendChild(li)

            let calcularprecioDelProducto = producto.precio * producto.cantidad;

            total += calcularprecioDelProducto;
        })

        mostrarTotal.textContent = total.toFixed(2)
    }
})