import _ from 'lodash';

import plogo from './images/PACRAV.png';
var logodiv = document.getElementById('logo');

import physio from './images/MG_7625_bw-medium.jpg';
var physiodiv = document.getElementById('hero');

function component() {

    const element = document.createElement('div'); // this is messy but it stops errors so it should be fixed

     const myIcon = new Image();
     myIcon.src = plogo;

     element.appendChild(myIcon);
     return element;
}

logodiv.appendChild(component());

function picture() {

    const diiv = document.createElement('div'); // this is messy but it stops errors so it should be fixed

     const myImage = new Image();
     myImage.src = physio;

     diiv.appendChild(myImage);
     return diiv;
}

physiodiv.appendChild(picture());
