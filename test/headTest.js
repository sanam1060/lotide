const assertEqual = require('../assertEqual');
const head = require('../head');
//TEST CODE
assertEqual(head(), "undefinded");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");