/* eslint linebreak-style: ["error","windows"] */
import React from 'react';
import {
  Button, FormGroup,
  ControlLabel, Form,
} from 'react-bootstrap';

export default class ProductAdd extends React.Component 
{
  constructor() 
  {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) 
  {
    e.preventDefault();
    const form = document.forms.ProductAdd;
    const product = {
      Name: form.product.value,
      Price: form.price.value.slice(1),
      Category: form.category.value,
      Image: form.image.value,
    };
    const { createProduct } = this.props;
    createProduct(product);
    // clearing the form for next inout
    form.price.value = '$';
    form.product.value = '';
    form.image.value = '';
	alert('Added Successfully!');
  }

  render() 
  {
    return (
      <div>
        <form name="ProductAdd" onSubmit={this.handleSubmit}>
          <div>
            <FormGroup>
              <ControlLabel htmlFor="category">
                Category
              </ControlLabel>
              <select name="category">
                <option value="shirt">Shirts</option>
                <option value="jeans">Jeans</option>
                <option value="jacket">Jackets</option>
                <option value="sweater">Sweaters</option>
                <option value="accessories">Accessories</option>
              </select>
            </FormGroup>
            <FormGroup>
              <ControlLabel htmlFor="price">
                Price Per Unit
              </ControlLabel>
              <input type="text" name="price" />
            </FormGroup>
            <FormGroup>
              <ControlLabel htmlFor="product">
              Product Name
              </ControlLabel>
              <input type="text" name="product" />
            </FormGroup>
            <FormGroup>
              <ControlLabel htmlFor="image">
              Image URL
              </ControlLabel>
              <input type="text" name="image" />
            </FormGroup>
          </div>
          <Button bsStyle="btn btn-primary" type="submit">Add Product</Button>
        </form>
      </div>

    );
  }
}