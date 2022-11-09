import { Artwork } from "./Artwork";
import { Statue } from "./Statue";

let lista: Artwork[]=[];

document.addEventListener('DOMContentLoaded', () => {
    let dbszam = 0;
    let osszpenz = 0;
    let nevformat = /^[A-Za-z, ]{1,}$/
    document.getElementById('felvetel')?.addEventListener('click', () => {
        (document.getElementById('rosszNev') as HTMLElement).textContent = '';
        (document.getElementById('rosszEv') as HTMLElement).textContent = '';
        (document.getElementById('rosszAr') as HTMLElement).textContent = '';
        (document.getElementById('rosszMagassag') as HTMLElement).textContent = '';
        let joNev:boolean = nevformat.test((document.getElementById('nev') as HTMLInputElement).value);
        let joEv:boolean = parseInt((document.getElementById('ev') as HTMLInputElement).value) <= 2022;
        let joAr:boolean = parseInt((document.getElementById('ar') as HTMLInputElement).value) >= 1;
        let joMagassag:boolean = parseInt((document.getElementById('magassag') as HTMLInputElement).value) >= 10;
        if(joNev==true && joEv==true && joAr==true && joMagassag==true){
            dbszam++;
            osszpenz += parseInt((document.getElementById('ar') as HTMLInputElement).value);
            (document.getElementById('dbszam') as HTMLElement).textContent = dbszam.toString();
            (document.getElementById('osszpenz') as HTMLElement).textContent = osszpenz.toString();
            lista.push(new Statue((document.getElementById('nev') as HTMLInputElement).value, 
            parseInt((document.getElementById('ev') as HTMLInputElement).value),
            parseInt((document.getElementById('ar') as HTMLInputElement).value),
            parseInt((document.getElementById('magassag') as HTMLInputElement).value)
            ));
            (document.getElementById('nev') as HTMLInputElement).value = '';
            (document.getElementById('ev') as HTMLInputElement).value = '';
            (document.getElementById('ar') as HTMLInputElement).value = '';
            (document.getElementById('magassag') as HTMLInputElement).value = '';
        }else if(!joNev){
            (document.getElementById('rosszNev') as HTMLElement).textContent = 'Rossz a név!';
        }else if(!joEv){
            (document.getElementById('rosszEv') as HTMLElement).textContent = 'Rossz az év!';
        }else if(!joAr){
            (document.getElementById('rosszAr') as HTMLElement).textContent = 'Rossz az Ár! (min 1 Ft)';
        }else if(!joMagassag){
            (document.getElementById('rosszMagassag') as HTMLElement).textContent = 'Rossz a magasság! (min 10 cm)';
        }
    })
})