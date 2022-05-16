import React from "react";
import { Button, Form } from "react-bootstrap";
import logo from "../logoKab.png";

const Home = () => {
  return (
    <div className="w-full">
      {/* header */}
      <div className="flex gap-x-4 border-b px-4 pt-2 border-gray-300 w-full bg-slate-200">
        <div>
          <img src={logo} className="w-12" alt="logo" />
        </div>
        <div>
          <div className="font-semibold text-lg">RSUD Kab. Aceh Tamiang</div>
          <p className="font-semibold">Insiden Keselamatan Pasien</p>
        </div>
      </div>

      {/* form */}

      <div className="flex justify-center">
        <div className="w-1/2">
          <div className="text-xl font-semibold text-center py-6">Form Laporan Insiden Keselamatan Pasien</div>
          <Form>
            <Form.Label className="font-semibold">DATA PASIEN :</Form.Label>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Umur (Thn)</Form.Label>
              <Form.Control min={0} type="number" placeholder="Umur" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Select aria-label="Jenis Kelamin">
                <option disabled>Pilih Jawaban</option>
                <option value="1">Laki-laki</option>
                <option value="2">Perempuan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tanggal Mendapatkan Pelayanan</Form.Label>
              <Form.Control type="date" placeholder="Tanggal" />
            </Form.Group>
            <Form.Label className="font-semibold">
              RINCIAN KEJADIAN :
            </Form.Label>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tanggal & Waktu Insiden</Form.Label>
              <Form.Control type="date" placeholder="Tanggal" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Insiden</Form.Label>
              <Form.Control type="text" placeholder="Insiden" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Kronologis Insiden</Form.Label>
              <Form.Control
                placeholder="Kronologis Insiden"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Jenis Insiden</Form.Label>
              <Form.Control type="text" placeholder="Jenis Insiden" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tipe Insiden</Form.Label>
              <Form.Control type="text" placeholder="Tipe Insiden" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Dampak/Akibat</Form.Label>
              <Form.Control
                placeholder="Dampak/Akibat"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Orang pertama yang melaporkan Insiden</Form.Label>
              <Form.Control type="text" placeholder="Insiden" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tempat Insiden</Form.Label>
              <Form.Control type="text" placeholder="Insiden" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Tindak Lanjut yang dilakukan</Form.Label>
              <Form.Control
                placeholder="Tindak Lanjut yang dilakukan"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tindak Lanjut dilakukan Oleh</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tindak Lanjut dilakukan Oleh"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Apakah kejadian yang sama pernah terjadi ?
              </Form.Label>
              <Form.Select aria-label="Insiden">
                <option disabled>Pilih Jawaban</option>
                <option value="1">Ya</option>
                <option value="2">Tidak</option>
              </Form.Select>
            </Form.Group>

            <Form.Label className="font-semibold">HASIL INVESTIGASI :</Form.Label>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Masalah Asuhan Keperawatan</Form.Label>
              <Form.Control
                placeholder="Masalah Asuhan Keperawatan"
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Masalah Pelayanan</Form.Label>
              <Form.Control
                placeholder="Masalah Pelayanan"
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Penyebab Langsung Insiden</Form.Label>
              <Form.Control
                placeholder="Penyebab Langsung Insiden"
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Akar Masalah Insiden</Form.Label>
              <Form.Control
                placeholder="Akar Masalah Insiden"
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Masalah Asuhan Keperawatan</Form.Label>
              <Form.Control
                placeholder="Masalah Asuhan Keperawatan"
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Tindakan yang akan dilakukan</Form.Label>
              <Form.Control
                placeholder="Tindakan yang akan dilakukan"
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Button className="mb-10">SIMPAN</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Home;
