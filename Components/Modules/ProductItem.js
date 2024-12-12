import React from "react";
import FormInput from "./FormInput";

const ProductItem = ({ form, setForm }) => {
  const addItemHandler = () => {
    setForm({
      ...form,
      products: [...form.products, { name: "", price: "", qty: "" }],
    });
  };
  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...form.products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };
  const deleteHandler = (index) => {
    console.log(index)
    const newProducts = [...form.products];
    newProducts.splice(index, 1);
    console.log(newProducts)
    setForm({ ...form, products: newProducts });
  };

  return (
    <div className="item-list">
      <p>Purchased Products</p>
      {form.products?.map((product, index) => {
        return (
          <div className="form-input__list">
            <FormInput
              label={"product Name"}
              name={"name"}
              type={"text"}
              value={product.name}
              key={index}
              onChange={(e) => changeHandler(e, index)}
            />
            <div>
              <FormInput
                label={"Price"}
                name={"price"}
                onChange={(e) => changeHandler(e, index)}
                type={"text"}
                value={product.price}
              />
              <FormInput
                label={"Qty"}
                name={"qty"}
                onChange={(e) => changeHandler(e, index)}
                type={"number"}
                value={product.qty}
              />
            </div>
            <button onClick={()=>deleteHandler(index)}>Remove</button>
          </div>
        );
      })}
      <button onClick={addItemHandler}>Add item</button>
    </div>
  );
};

export default ProductItem;
