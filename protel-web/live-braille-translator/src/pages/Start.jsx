import React, { useState } from 'react';
import '../styles.css';

function Start() {
  const [text, setText] = useState("");
  const [braille, setBraille] = useState("");

  const brailleMap = {
    a: "⠁", b: "⠃", c: "⠉", d: "⠙", e: "⠑",
    f: "⠋", g: "⠛", h: "⠓", i: "⠊", j: "⠚",
    k: "⠅", l: "⠇", m: "⠍", n: "⠝", o: "⠕",
    p: "⠏", q: "⠟", r: "⠗", s: "⠎", t: "⠞",
    u: "⠥", v: "⠧", w: "⠺", x: "⠭", y: "⠽", z: "⠵",
    ' ': ' ',
    '.': "⠲", ',': "⠂", '?': "⠦", '!': "⠖", ':': "⠒",
    ';': "⠆", "'": "⠄", '"': "⠶", '(': "⠶", ')': "⠶",
    '-': "⠤", '+': "⠖", '=': "⠶", '/': "⠌", '*': "⠔",
    '%': "⠨⠴"
  };

  const numberMap = {
    '1': "⠁", '2': "⠃", '3': "⠉", '4': "⠙", '5': "⠑",
    '6': "⠋", '7': "⠛", '8': "⠓", '9': "⠊", '0': "⠚"
  };

  const handleInput = (e) => {
    const input = e.target.value.toLowerCase();
    setText(input);

    let result = '';
    let inNumber = false;

    for (let c of input) {
      if (c >= '0' && c <= '9') {
        if (!inNumber) {
          result += '⠼'; 
          inNumber = true;
        }
        result += numberMap[c];
      } else {
        inNumber = false;
        result += brailleMap[c] || '?';
      }
    }

    setBraille(result);
  };

  const handleSend = () => {
    if (!text.trim()) return alert("Teks tidak boleh kosong.");
    fetch("http://localhost:5501/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    })
      .then(res => res.text())
      .then(alert)
      .catch(err => alert("Gagal mengirim ke Arduino."));
  };

  return (
    <div className="container">
      <h1>Live Braille Translator</h1>
      <textarea
        value={text}
        onChange={handleInput}
        placeholder="Ketik teks di sini..."
      />
      <button className="btn" onClick={handleSend}>Kirim ke Arduino</button>
      <div className="output-label">Hasil Translasi Braille:</div>
      <div id="brailleOutput">
        {braille.split('').map((char, idx) => (
          <span key={idx} className="braille-char">{char}</span>
        ))}
      </div>
    </div>
  );
}

export default Start;
