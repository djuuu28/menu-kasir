import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Hasil, Navbar, ListCategory, Menus } from "./components/index";
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { API_URL } from "./util/constants";
import axios from "axios";
import swal from "sweetalert";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoryYangDipilih: "Makanan",
      keranjangs: [],
    };
  }
  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoryYangDipilih)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeCategory = (value) => {
    this.setState({
      categoryYangDipilih: value,
      menus: [],
    });

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  masukKeranjang = (value) => {
    const Keranjang = {
      jumlah: 1,
      total_harga: value.harga,
      product: value,
    };

    axios
      .post(API_URL + "keranjangs", Keranjang)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        swal({
          icon: "info",
          title: "Anda Yakin Memilih?",
          text: Keranjang.product.nama,
          buttons: ["Cancel", "Order"],
        }).then((willDelete) => {
          if (willDelete) {
            swal({
              icon: "success",
              text: "Sukses Memesan = " + Keranjang.product.nama,
              buttons: false,
              timer: 1500,
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { menus, categoryYangDipilih } = this.state;
    return (
      <div>
        <Navbar />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategory
                changeCategory={this.changeCategory}
                categoryYangDipilih={categoryYangDipilih}
              />
              <Col>
                <h4>Daftar Menu</h4>

                <hr />
                <Row>
                  {menus &&
                    menus.map((menu) => (
                      <Menus
                        key={menu.id}
                        menu={menu}
                        masukKeranjang={this.masukKeranjang}
                      />
                    ))}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
