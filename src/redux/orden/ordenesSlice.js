import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.js";

export const ordenesSlice = createSlice({
  name: "ordenes",
  initialState: initialState,

  reducers: {
    eliminarOrden: state => {
      state = initialState;
    },
    actualizarOrden: (state, action) => {
      const { ordenNo, fechaEntrega, fechaCompra, taxValor, precioTotal } =
        action.payload;
      return {
        ...state,
        ordenNo: ordenNo,
        fechaEntrega: fechaEntrega,
        fechaCompra: fechaCompra,
        taxValor: taxValor,
        precioTotal: precioTotal,
      };
    },
    eliminarProducto: (state,action) => {
        const{id}= action.payload;
        const newProducto= state.producto.filter((x)=>{
          x.id !== id
        })
        state.producto = newProducto;
    },
    actualizarProducto: (state, action) => {
        const { id, cantidad } = action.payload.producto;
        
        const newProducto = state.producto.map((x)=>
          x.id === id? {...x, cantidad: cantidad} : x
        )

        return {
          ...state,
          producto : newProducto
        };
    },
    adicionarProducto: (state, action) => {
      return state.push(action.payload.producto);
    },
    eliminarCliente: state => {
        return (state.cliente = initialState.cliente);
    },
    actualizarCliente: (state, action) => {
        const {
          id,
          nombre,
          correo,
          telefono,
          direccion,
        } = action.payload.cliente;

     const newCliente = state.cliente.map((x) =>
       x.id === id ? { id:id, nombre:nombre, correo:correo, telefono:telefono, direccion:direccion } : x
     );

        return {
          ...state,
          cliente : newCliente
        };
    },
    adicionarCliente: (state, action) => {
       state.cliente = action.payload.cliente;
    },
  },
});

export const selectOrden = (state) => state.ordenes.Orderno;

export const { eliminarOrden,
actualizarOrden,
eliminarProducto,
actualizarProducto,
adicionarProducto,
eliminarCliente,
actualizarCliente,
adicionarCliente } = ordenesSlice.actions;

export default ordenesSlice.reducer;