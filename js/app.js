// Cifra un texto mediante el cifrado César.
function cipher() {
  // Se obtiene el texto a cifrar.
  var phrase = prompt("Escribe el texto a cifrar");
  var charValue = 0;
  var cipherPhrase = "";
  // Ciclo que itera por cada elemento de phrase.
  for (var i = 0; i < phrase.length; i++) {
    // Obtiene el valor ASCII del elemento.
    charValue = phrase.charCodeAt(i);
    // Si es mayor o igual a 65 y menor o igual a 90, letras mayúsculas
    if (charValue >= 65 && charValue <= 90) {
      //Se obtiene nuevo valor ASCII
      charValue = (charValue - 65 + 33) % 26 + 65;
      // Se obtiene caracterde nuevo valor según ASCII
      charValue = String.fromCharCode(charValue);
      cipherPhrase += charValue;
    } else if (charValue >= 97 && charValue <= 122) {
      // Si es mayor o igual a 97 y menor o igual a 122, letras minúsculas
      //Se obtiene nuevo valor ASCII
      charValue = (charValue - 97 + 33) % 26 + 97;
      // Se obtiene caracterde nuevo valor según ASCII
      charValue = String.fromCharCode(charValue);
      cipherPhrase = cipherPhrase + charValue;
    }
  }
  return alert("El texto cifrado es: " + cipherPhrase);
}

// Descifra un texto codificado por el cifrado César.
function deCipher() {
  // Se obtiene el texto a descifrar
  var phrase2 = prompt("Escribe el texto a descifrar");
  var charValue2 = 0;
  var deCipherPhrase = "";
  for (var i = 0; i < phrase2.length; i++) {
    // Obtiene el valor ASCII del elemento.
    charValue2 = phrase2.charCodeAt(i);
    // Si es mayor o igual a 65 y menor o igual a 90
    if (charValue2 >= 65 && charValue2 <= 90) {
      charValue2 = (charValue2 + 65 - 33) % 26 + 65;
      charValue2 = String.fromCharCode(charValue2);
      deCipherPhrase = deCipherPhrase + charValue2;
    } else if (charValue2 >= 97 && charValue2 <= 122) {
      charValue2 = (charValue2 + 97 - 45) % 26 + 97;
      charValue2 = String.fromCharCode(charValue2);
      deCipherPhrase += charValue2;
    }
  }
  return alert("El texto descifrado es: " + deCipherPhrase);
}

cipher();
deCipher();
