"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let lista = [];
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    let dbszam = 0;
    let osszpenz = 0;
    let nevformat = /^[A-Za-z, ]{1,}$/;
    (_a = document.getElementById('felvetel')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        document.getElementById('rosszNev').textContent = '';
        document.getElementById('rosszEv').textContent = '';
        document.getElementById('rosszAr').textContent = '';
        document.getElementById('rosszMagassag').textContent = '';
        let joNev = nevformat.test(document.getElementById('nev').value);
        let joEv = parseInt(document.getElementById('ev').value) <= 2022;
        let joAr = parseInt(document.getElementById('ar').value) >= 1;
        let joMagassag = parseInt(document.getElementById('magassag').value) >= 10;
        if (joNev == true && joEv == true && joAr == true && joMagassag == true) {
            dbszam++;
            osszpenz += parseInt(document.getElementById('ar').value);
            document.getElementById('dbszam').textContent = dbszam.toString();
            document.getElementById('osszpenz').textContent = osszpenz.toString();
            lista.push(new Statue_1.Statue(document.getElementById('nev').value, parseInt(document.getElementById('ev').value), parseInt(document.getElementById('ar').value), parseInt(document.getElementById('magassag').value)));
            document.getElementById('nev').value = '';
            document.getElementById('ev').value = '';
            document.getElementById('ar').value = '';
            document.getElementById('magassag').value = '';
        }
        else if (!joNev) {
            document.getElementById('rosszNev').textContent = 'Rossz a név!';
        }
        else if (!joEv) {
            document.getElementById('rosszEv').textContent = 'Rossz az év!';
        }
        else if (!joAr) {
            document.getElementById('rosszAr').textContent = 'Rossz az Ár! (min 1 Ft)';
        }
        else if (!joMagassag) {
            document.getElementById('rosszMagassag').textContent = 'Rossz a magasság! (min 10 cm)';
        }
    });
});
