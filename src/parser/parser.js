const parseString = require('xml2js').parseString;
const iconv = require('iconv-lite');
const https = require('https');
const categoryModel = require('../models/categoryModel');

const parser = () => {
  https.get('https://www.dolina-podarkov.ru/yml/yandexbig.php', res => {
    res.pipe(iconv.decodeStream('win1251')).collect((err, body) => {
      if (err) throw err;

      parseString(body, (err, result) => {
        const categories = result.yml_catalog.shop[0].categories[0].category;
        const products = result.yml_catalog.shop[0].offers[0].offer;

        const category = Object.values(categories[1]);

        (async () => {
          try {
            await categoryModel.create({ title: category[0] });
          } catch (err) {
            console.log(err);
          }
        })();
      });
    });
  });
};

module.exports = parser;
