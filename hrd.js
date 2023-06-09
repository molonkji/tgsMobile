const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Melakukan inputan pada keyboard
rl.question("Masukan Nilai Test Coding : ", (tc) => {
  rl.question("Masukan Nilai Interview : ", (inter) => {
    //Deklarasi variabel
    let nilCoding = parseInt(tc);
    let nilInterview = inter.toUpperCase();

    let hasilCoding = "";
    let hasilInterview = "";

    //kondisi
    if (nilCoding > 80) {
      hasilCoding = "LOLOS";
    } else if (nilCoding >= 60 || nilCoding <= 80) {
      hasilCoding = "DIPERTIMBANGKAN";
    } else {
      hasilCoding = "GAGAL";
    }

    if (nilInterview == "A" || nilInterview == "B") {
      hasilInterview = "LOLOS";
    } else {
      hasilInterview = "GAGAL";
    }

    if (hasilCoding == "GAGAL" || hasilInterview == "GAGAL") {
      console.log("Maaf Kamu Belum Berhasil Menjadi Colon Programer");
    } else {
      console.log("Selamat Kamu Berhasil Menjadi Calon Programner");
    }

    rl.close();
  });
});
