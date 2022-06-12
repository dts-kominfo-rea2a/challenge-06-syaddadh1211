// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (err, data) => {
  let jsonAll = [];
  let jsonTest = "";

  fs.readFile(file1, "utf8", (err, data1) => {
    if (err) {
      return err;
    }
    fs.readFile(file2, "utf8", (err, data2) => {
      if (err) {
        return err;
      }
      fs.readFile(file3, "utf8", (err, data3) => {
        if (err) {
          return err;
        }
        jsonTest = JSON.parse(data1);
        jsonAll.push(jsonTest.message.split(" ")[1]);
        jsonTest = JSON.parse(data2);
        jsonAll.push(jsonTest[0].message.split(" ")[1]);
        jsonTest = JSON.parse(data3);
        jsonAll.push(jsonTest[0].data.message.split(" ")[1]);
      });
    });
  });
  console.log(data);
  return null, data;
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
