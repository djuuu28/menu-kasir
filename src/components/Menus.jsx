/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Col } from "react-bootstrap";
import { numberWithCommas } from "../util/utils";

function Menus({ menu, masukKeranjang }) {
  return (
    <Col md={4} xs={6} className="mb-4">
      {/* properti className yang diberikan nilai "shadow"(efek bayangan)*/}
      <Card className="shadow" onClick={() => masukKeranjang(menu)}>
        <Card.Img
          variant="top"
          // src source untk menentukan lokasi dari sumber gambar
          src={
            "images/images/" +
            // mengambil properti "nama" dari objek "category" dalam objek "menu"
            // toLowercase mengonversi semua karakter dalam string menjadi huruf kecil
            // + digunakan untuk menggabungkan string
            menu.category.nama.toLowerCase() +
            // tanda "/"  digunakan sebagai pemisah
            "/" +
            // properti gambar dari objek menu
            menu.gambar
            // src akan menjadi "images/images/food/burger.jpg".
          }
        />
        <Card.Body>
          <Card.Title>
            {/* properti "nama" pada objek "menu". */}
            {/* nilai properti "kode" dari objek "menu" 
            dievaluasi terlebih dahulu sebelum dimasukkan ke dalam elemen <strong>(terlihat tebal di halaman web.)*/}
            {menu.nama} <strong>({menu.kode})</strong>
          </Card.Title>
          {/* memformat angka dengan penambahan koma sebagai pemisah ribuan pd properti "harga" objek "menu"  */}
          <Card.Text>Rp.{numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Menus;
