const fs = require('fs');

const htmlPath = 'c:/tesis/revisi fl/index.html';
let content = fs.readFileSync(htmlPath, 'utf8');

const newPages = `    const PAGES = [
      { img: '1.png', audio: [] },
      { img: '2.png', audio: [] },
      { img: '3.png', audio: [] },
      { img: '4.png', audio: [{ label: 'aiueo', file: 'aiueo.mp3', x: 26, y: 77, w: 10, h: 5 }] },
      { img: '5.png', audio: [] },
      { img: '6.png', audio: [] },
      { img: '7.png', audio: [] },
      { img: '8.png', audio: [] },
      { img: '9.png', audio: [] },
      { img: '10.png', audio: [] },
      { img: '11.png', audio: [] },
      { img: '12.png', audio: [] },
      { img: '13.png', audio: [] },
      { img: '14.png', audio: [] },
      { img: '15.png', audio: [] },
      { img: '16.png', audio: [] },
      { img: '17.png', audio: [] },
      { img: '18.png', audio: [] },
      { img: '19.png', audio: [{ label: 'sepeda', file: 'sepeda.mp3', x: 45, y: 58, w: 10, h: 5 }, { label: 'banu', file: 'bamu.mp3', x: 45, y: 78, w: 10, h: 5 }] },
      { img: '20.png', audio: [{ label: 'sepeda', file: 'sepeda.mp3', x: 45, y: 64, w: 10, h: 5 }, { label: 'banu', file: 'bamu.mp3', x: 45, y: 83, w: 10, h: 5 }] },
      { img: '21.png', audio: [{ label: 'roda', file: 'roda.mp3', x: 45, y: 64, w: 10, h: 5 }, { label: 'banu', file: 'bamu.mp3', x: 45, y: 83, w: 10, h: 5 }] },
      { img: '22.png', audio: [{ label: 'roda', file: 'roda.mp3', x: 45, y: 64, w: 10, h: 5 }, { label: 'topi biru', file: 'topi biru.mp3', x: 45, y: 83, w: 10, h: 5 }] },
      { img: '23.png', audio: [] },
      { img: '24.png', audio: [] },
      { img: '25.png', audio: [] },
      { img: '26.png', audio: [] },
      { img: '27.png', audio: [{ label: 'baju', file: 'baju.mp3', x: 45, y: 85, w: 10, h: 5 }] },
      { img: '28.png', audio: [{ label: 'bola', file: 'bola.mp3', x: 45, y: 85, w: 10, h: 5 }] },
      { img: '29.png', audio: [{ label: 'buku', file: 'buku.mp3', x: 45, y: 85, w: 10, h: 5 }] },
      { img: '30.png', audio: [] },
      { img: '31.png', audio: [{ label: 'ida', file: 'ida.mp3', x: 45, y: 85, w: 10, h: 5 }] },
      { img: '32.png', audio: [{ label: 'sepeda', file: 'sepeda.mp3', x: 45, y: 68, w: 10, h: 5 }, { label: 'banu', file: 'bamu.mp3', x: 45, y: 88, w: 10, h: 5 }] },
      { img: '33.png', audio: [{ label: 'sepeda', file: 'sepeda.mp3', x: 45, y: 68, w: 10, h: 5 }, { label: 'banu', file: 'bamu.mp3', x: 45, y: 88, w: 10, h: 5 }] },
      { img: '34.png', audio: [{ label: 'roda', file: 'roda.mp3', x: 45, y: 68, w: 10, h: 5 }, { label: 'banu', file: 'bamu.mp3', x: 45, y: 88, w: 10, h: 5 }] },
      { img: '35.png', audio: [{ label: 'roda', file: 'roda.mp3', x: 45, y: 68, w: 10, h: 5 }, { label: 'topi biru', file: 'topi biru.mp3', x: 45, y: 88, w: 10, h: 5 }] },
      { img: '36.png', audio: [{ label: 'rumah', file: 'rumah.mp3', x: 45, y: 85, w: 10, h: 5 }] },
      { img: '37.png', audio: [{ label: 'guru', file: 'guru.mp3', x: 45, y: 88, w: 10, h: 5 }] },
      { img: '38.png', audio: [{ label: 'guru', file: 'guru.mp3', x: 45, y: 88, w: 10, h: 5 }] },
      { img: '39.png', audio: [{ label: 'Pasangkanlah', file: 'Pasangkanlah.mp3', x: 45, y: 13, w: 10, h: 5 }, { label: 'roda', file: 'roda.mp3', x: 38, y: 25, w: 10, h: 5 }, { label: 'sepeda', file: 'sepeda.mp3', x: 38, y: 46, w: 10, h: 5 }, { label: 'sepatu', file: 'sepatu.mp3', x: 38, y: 63, w: 10, h: 5 }, { label: 'topi biru', file: 'topi biru.mp3', x: 38, y: 85, w: 10, h: 5 }] },
      { img: '40.png', audio: [{ label: 'Pasangkanlah', file: 'Pasangkanlah.mp3', x: 45, y: 13, w: 10, h: 5 }, { label: 'baju', file: 'baju.mp3', x: 38, y: 25, w: 10, h: 5 }, { label: 'buku', file: 'buku.mp3', x: 38, y: 46, w: 10, h: 5 }, { label: 'sepatu', file: 'sepatu.mp3', x: 38, y: 63, w: 10, h: 5 }, { label: 'guru', file: 'guru.mp3', x: 38, y: 85, w: 10, h: 5 }] },
      { img: '41.png', audio: [{ label: 'hore', file: 'hore kamu hebat yu bermain lagi besok.mp3', x: 47, y: 46, w: 10, h: 5 }] },
      { img: '42.png', audio: [{ label: 'rapihkan', file: 'Rapihkan kembali mainan mu.mp3', x: 47, y: 44, w: 10, h: 5 }] },
      { img: '43.png', audio: [{ label: 'simpanlah', file: 'Simpan lah di tempat semula.mp3', x: 53, y: 42, w: 10, h: 5 }] },
      { img: '44.png', audio: [] },
      { img: '45.png', audio: [] }
    ];`;

content = content.replace(/const PAGES = \[[\s\S]*?\];/, newPages);

fs.writeFileSync(htmlPath, content, 'utf8');
console.log("HTML updated correctly this time!");
