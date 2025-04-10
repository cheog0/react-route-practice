import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/cheog0/react-route-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="product-detail-container">
      <Row>
        <Col md={6}>
          <img
            src={product?.img}
            alt={product?.title}
            className="product-image"
          />
        </Col>
        <Col md={6} className="product-info">
          <h3 className="product-title">{product?.title}</h3>
          <div className="product-price">
            {product?.price?.toLocaleString()}원
          </div>
          <div className="product-subtext">Conscious choice</div>

          <Form.Select className="size-select mt-3 mb-3">
            <option>사이즈 선택</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </Form.Select>

          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
