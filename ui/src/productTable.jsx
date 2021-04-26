/* eslint linebreak-style: ["error","windows"] */
import React from 'react';
import {
  Button, Tooltip,
  Glyphicon, OverlayTrigger,
  Table,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, withRouter } from 'react-router-dom';
const deleteTooltip = (
  <Tooltip id="delete-tooltip" placement="top">Delete Product</Tooltip>
);

const editTooltip = (
  <Tooltip id="edit-tooltip" placement="top">Edit Product</Tooltip>
);

const imageTooltip = (
  <Tooltip id="image-tooltip" placement="top">View Product Image</Tooltip>
);

const ProductRow = withRouter(({ product, deleteProduct, index }) => (
  <tr>
    <td>{product.Name}</td>
    <td>
      $
      {product.Price}
    </td>
    <td>{product.Category}</td>
    <td>
      <Link to={`/img/${product.Image}`}>
        <OverlayTrigger delayShow={500} overlay={imageTooltip}>
          <Button bsStyle="primary">
            <Glyphicon glyph="picture" />
          </Button>
        </OverlayTrigger>
      </Link>
    </td>
    <td>
      <LinkContainer to={`/edit/${product.id}`}>
        <OverlayTrigger delayShow={500} overlay={editTooltip}>
          <Button bsStyle="primary">
            <Glyphicon glyph="edit" />
          </Button>
        </OverlayTrigger>
      </LinkContainer>
    </td>
    <td>
      <OverlayTrigger delayShow={500} overlay={deleteTooltip}>
        <Button bsStyle="primary" type="button" onClick={() => { deleteProduct(index); }}>
          <Glyphicon glyph="trash" />
        </Button>
      </OverlayTrigger>
    </td>
  </tr>
));

export default function ProductTable({ products, deleteProduct }) 
{
  const productRows = products.map(product => (
    <ProductRow
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      index={product.id}
    />
  ));
  return (
    <Table bordered condensed hover responsive>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </Table>
  );
}