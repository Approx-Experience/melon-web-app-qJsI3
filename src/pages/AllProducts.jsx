import React, { useEffect, useState } from "react";
import { Container, Row, Col, NavLink, Dropdown } from "react-bootstrap";
import { useLoaderData, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import "./AllProducts.css";

const AllProudcts = () => {
  const { products } = useLoaderData()

      const productCards = products.map((product) => {
          return (
            <ProductCard
              key={product.productId}
              productId={product.productId}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          );
      })

  return (
    <Container fluid className="products-container">
      <h3 className="products-header">the hottest threads for staying cool</h3>
      <h3 className="category-header">shop all</h3>
      <p className="products-header">these things are sellin like hotcakes</p>
      <Row className="all-products-row">
        <Col xs={{ span: 2 }} className="sidebar-col">
          <h5 className="sidebar-title">shop by category</h5>
          <NavLink className='sidebar-category'>men</NavLink>
          <NavLink className='sidebar-category'>women</NavLink>
          <NavLink className='sidebar-category'>accessories</NavLink>
          <NavLink className='sidebar-category'>shoes</NavLink>
          <NavLink className='sidebar-category'>sale</NavLink>
        </Col>
        <Col className="products-col">
          <Row xs={2} lg={2} xl={3} className="products-row">
            {productCards}
          </Row>
        </Col>
        <Col xs={{span: 1}} lg={{span: 1}} xl={{span: 2}} className="right-spacer-col"></Col>
      </Row>
    </Container>
  );
};

export default AllProudcts;
