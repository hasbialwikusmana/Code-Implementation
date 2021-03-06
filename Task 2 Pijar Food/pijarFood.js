const pijarFood = (harga, voucher, jarak, pajak) => {
  const potongan = cekPromo(harga, voucher);
  const ongkir = cekOngkir(jarak);
  const biayaPajak = cekPajak(harga, pajak);
  const subtotal = harga - potongan + ongkir + biayaPajak;

  console.log(`Harga        : ${harga}`);
  console.log(`Potongan     : ${potongan}`);
  console.log(`Biaya Antar  : ${ongkir}`);
  console.log(`Pajak        : ${biayaPajak}`);
  console.log(`Subtotal     : ${subtotal}`);
};

let potongan = 0;
let ppn = 0;
let ongkir = 0;

const cekPromo = (harga, voucher) => {
  if (voucher === "PIJARFOOD5" && harga >= 50000) {
    if ((harga * 50) / 100 <= 50000) {
      potongan = (harga * 50) / 100;
    } else {
      potongan = 50000;
    }
  } else if (voucher === "DITRAKTIRPIJAR" && harga >= 25000) {
    if ((harga * 25) / 100 <= 25000) {
      potongan = (harga * 25) / 100;
    } else {
      potongan = 25000;
    }
  }
  return potongan;
};

const cekOngkir = (jarak) => {
  if (jarak <= 2) {
    ongkir = 5000;
  } else if (jarak > 2) {
    ongkir = 5000 + (jarak - 2) * 3000;
  }
  return ongkir;
};

const cekPajak = (harga, pajak) => {
  if (pajak) {
    ppn = (harga * 5) / 100;
  }
  return ppn;
};
pijarFood(75000, "PIJARFOOD5", 5, true);
pijarFood(75000, "PIJARFOODs5", 5, false);
// pijarFood(75000, "DITRAKTIRPIJAR", 5, true);
