import { useState } from "react";
import "./App.css";
import bg from "./assets/bg.png";


const ELEMENTS = [
  { symbol: "H", name: "Hydrogen", number: 1, mass: 1.008 },
  { symbol: "He", name: "Helium", number: 2, mass: 4.0026 },
  { symbol: "Li", name: "Lithium", number: 3, mass: 6.94 },
  { symbol: "Be", name: "Beryllium", number: 4, mass: 9.0122 },
  { symbol: "B", name: "Boron", number: 5, mass: 10.81 },
  { symbol: "C", name: "Carbon", number: 6, mass: 12.011 },
  { symbol: "N", name: "Nitrogen", number: 7, mass: 14.007 },
  { symbol: "O", name: "Oxygen", number: 8, mass: 15.999 },
  { symbol: "F", name: "Fluorine", number: 9, mass: 18.998 },
  { symbol: "Ne", name: "Neon", number: 10, mass: 20.18 },
  { symbol: "Na", name: "Sodium", number: 11, mass: 22.99 },
  { symbol: "Mg", name: "Magnesium", number: 12, mass: 24.305 },
  { symbol: "Al", name: "Aluminium", number: 13, mass: 26.982 },
  { symbol: "Si", name: "Silicon", number: 14, mass: 28.085 },
  { symbol: "P", name: "Phosphorus", number: 15, mass: 30.974 },
  { symbol: "S", name: "Sulfur", number: 16, mass: 32.06 },
  { symbol: "Cl", name: "Chlorine", number: 17, mass: 35.45 },
  { symbol: "Ar", name: "Argon", number: 18, mass: 39.948 },
  { symbol: "K", name: "Potassium", number: 19, mass: 39.098 },
  { symbol: "Ca", name: "Calcium", number: 20, mass: 40.078 },
  { symbol: "Sc", name: "Scandium", number: 21, mass: 44.956 },
  { symbol: "Ti", name: "Titanium", number: 22, mass: 47.867 },
  { symbol: "V", name: "Vanadium", number: 23, mass: 50.942 },
  { symbol: "Cr", name: "Chromium", number: 24, mass: 51.996 },
  { symbol: "Mn", name: "Manganese", number: 25, mass: 54.938 },
  { symbol: "Fe", name: "Iron", number: 26, mass: 55.845 },
  { symbol: "Co", name: "Cobalt", number: 27, mass: 58.933 },
  { symbol: "Ni", name: "Nickel", number: 28, mass: 58.693 },
  { symbol: "Cu", name: "Copper", number: 29, mass: 63.546 },
  { symbol: "Zn", name: "Zinc", number: 30, mass: 65.38 },
  { symbol: "Ga", name: "Gallium", number: 31, mass: 69.723 },
  { symbol: "Ge", name: "Germanium", number: 32, mass: 72.63 },
  { symbol: "As", name: "Arsenic", number: 33, mass: 74.922 },
  { symbol: "Se", name: "Selenium", number: 34, mass: 78.971 },
  { symbol: "Br", name: "Bromine", number: 35, mass: 79.904 },
  { symbol: "Kr", name: "Krypton", number: 36, mass: 83.798 },
  { symbol: "Rb", name: "Rubidium", number: 37, mass: 85.468 },
  { symbol: "Sr", name: "Strontium", number: 38, mass: 87.62 },
  { symbol: "Y", name: "Yttrium", number: 39, mass: 88.906 },
  { symbol: "Zr", name: "Zirconium", number: 40, mass: 91.224 },
  { symbol: "Nb", name: "Niobium", number: 41, mass: 92.906 },
  { symbol: "Mo", name: "Molybdenum", number: 42, mass: 95.95 },
  { symbol: "Tc", name: "Technetium", number: 43, mass: 98 },
  { symbol: "Ru", name: "Ruthenium", number: 44, mass: 101.07 },
  { symbol: "Rh", name: "Rhodium", number: 45, mass: 102.91 },
  { symbol: "Pd", name: "Palladium", number: 46, mass: 106.42 },
  { symbol: "Ag", name: "Silver", number: 47, mass: 107.87 },
  { symbol: "Cd", name: "Cadmium", number: 48, mass: 112.41 },
  { symbol: "In", name: "Indium", number: 49, mass: 114.82 },
  { symbol: "Sn", name: "Tin", number: 50, mass: 118.71 },
  { symbol: "Sb", name: "Antimony", number: 51, mass: 121.76 },
  { symbol: "Te", name: "Tellurium", number: 52, mass: 127.6 },
  { symbol: "I", name: "Iodine", number: 53, mass: 126.9 },
  { symbol: "Xe", name: "Xenon", number: 54, mass: 131.29 },
  { symbol: "Cs", name: "Caesium", number: 55, mass: 132.91 },
  { symbol: "Ba", name: "Barium", number: 56, mass: 137.33 },
  { symbol: "La", name: "Lanthanum", number: 57, mass: 138.91 },
  { symbol: "Ce", name: "Cerium", number: 58, mass: 140.12 },
  { symbol: "Pr", name: "Praseodymium", number: 59, mass: 140.91 },
  { symbol: "Nd", name: "Neodymium", number: 60, mass: 144.24 },
  { symbol: "Pm", name: "Promethium", number: 61, mass: 145 },
  { symbol: "Sm", name: "Samarium", number: 62, mass: 150.36 },
  { symbol: "Eu", name: "Europium", number: 63, mass: 151.96 },
  { symbol: "Gd", name: "Gadolinium", number: 64, mass: 157.25 },
  { symbol: "Tb", name: "Terbium", number: 65, mass: 158.93 },
  { symbol: "Dy", name: "Dysprosium", number: 66, mass: 162.5 },
  { symbol: "Ho", name: "Holmium", number: 67, mass: 164.93 },
  { symbol: "Er", name: "Erbium", number: 68, mass: 167.26 },
  { symbol: "Tm", name: "Thulium", number: 69, mass: 168.93 },
  { symbol: "Yb", name: "Ytterbium", number: 70, mass: 173.05 },
  { symbol: "Lu", name: "Lutetium", number: 71, mass: 174.97 },
  { symbol: "Hf", name: "Hafnium", number: 72, mass: 178.49 },
  { symbol: "Ta", name: "Tantalum", number: 73, mass: 180.95 },
  { symbol: "W", name: "Tungsten", number: 74, mass: 183.84 },
  { symbol: "Re", name: "Rhenium", number: 75, mass: 186.21 },
  { symbol: "Os", name: "Osmium", number: 76, mass: 190.23 },
  { symbol: "Ir", name: "Iridium", number: 77, mass: 192.22 },
  { symbol: "Pt", name: "Platinum", number: 78, mass: 195.08 },
  { symbol: "Au", name: "Gold", number: 79, mass: 196.97 },
  { symbol: "Hg", name: "Mercury", number: 80, mass: 200.59 },
  { symbol: "Tl", name: "Thallium", number: 81, mass: 204.38 },
  { symbol: "Pb", name: "Lead", number: 82, mass: 207.2 },
  { symbol: "Bi", name: "Bismuth", number: 83, mass: 208.98 },
  { symbol: "Po", name: "Polonium", number: 84, mass: 209 },
  { symbol: "At", name: "Astatine", number: 85, mass: 210 },
  { symbol: "Rn", name: "Radon", number: 86, mass: 222 },
  { symbol: "Fr", name: "Francium", number: 87, mass: 223 },
  { symbol: "Ra", name: "Radium", number: 88, mass: 226 },
  { symbol: "Ac", name: "Actinium", number: 89, mass: 227 },
  { symbol: "Th", name: "Thorium", number: 90, mass: 232.04 },
  { symbol: "Pa", name: "Protactinium", number: 91, mass: 231.04 },
  { symbol: "U", name: "Uranium", number: 92, mass: 238.03 },
  { symbol: "Np", name: "Neptunium", number: 93, mass: 237 },
  { symbol: "Pu", name: "Plutonium", number: 94, mass: 244 },
  { symbol: "Am", name: "Americium", number: 95, mass: 243 },
  { symbol: "Cm", name: "Curium", number: 96, mass: 247 },
  { symbol: "Bk", name: "Berkelium", number: 97, mass: 247 },
  { symbol: "Cf", name: "Californium", number: 98, mass: 251 },
  { symbol: "Es", name: "Einsteinium", number: 99, mass: 252 },
  { symbol: "Fm", name: "Fermium", number: 100, mass: 257 },
  { symbol: "Md", name: "Mendelevium", number: 101, mass: 258 },
  { symbol: "No", name: "Nobelium", number: 102, mass: 259 },
  { symbol: "Lr", name: "Lawrencium", number: 103, mass: 266 },
  { symbol: "Rf", name: "Rutherfordium", number: 104, mass: 267 },
  { symbol: "Db", name: "Dubnium", number: 105, mass: 268 },
  { symbol: "Sg", name: "Seaborgium", number: 106, mass: 269 },
  { symbol: "Bh", name: "Bohrium", number: 107, mass: 270 },
  { symbol: "Hs", name: "Hassium", number: 108, mass: 270 },
  { symbol: "Mt", name: "Meitnerium", number: 109, mass: 278 },
  { symbol: "Ds", name: "Darmstadtium", number: 110, mass: 281 },
  { symbol: "Rg", name: "Roentgenium", number: 111, mass: 282 },
  { symbol: "Cn", name: "Copernicium", number: 112, mass: 285 },
  { symbol: "Nh", name: "Nihonium", number: 113, mass: 286 },
  { symbol: "Fl", name: "Flerovium", number: 114, mass: 289 },
  { symbol: "Mc", name: "Moscovium", number: 115, mass: 290 },
  { symbol: "Lv", name: "Livermorium", number: 116, mass: 293 },
  { symbol: "Ts", name: "Tennessine", number: 117, mass: 294 },
  { symbol: "Og", name: "Oganesson", number: 118, mass: 294 },
];

const SYMBOLS = ELEMENTS.map((e) => e.symbol.toLowerCase());

function getElement(sym) {
  return ELEMENTS.find((e) => e.symbol.toLowerCase() === sym);
}

function spellWord(word) {
  word = word.toLowerCase();

  function solve(i, path) {
    if (i === word.length) return path;

    const one = word[i];
    if (SYMBOLS.includes(one)) {
      const e1 = getElement(one);
      const r1 = solve(i + 1, [...path, e1]);
      if (r1) return r1;
    }

    if (i + 2 <= word.length) {
      const two = word.slice(i, i + 2);
      if (SYMBOLS.includes(two)) {
        const e2 = getElement(two);
        const r2 = solve(i + 2, [...path, e2]);
        if (r2) return r2;
      }
    }

    return null;
  }

  return solve(0, []);
}

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [failed, setFailed] = useState(false);

  const handleSubmit = () => {
    if (!value.trim()) return;

    const out = spellWord(value.trim());

    if (!out) {
      setFailed(true);
      setResult([]);
    } else {
      setFailed(false);
      setResult(out);
    }
  };


  const handleKey = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div
      className="min-h-screen w-screen bg-cover max-sm:pb-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-between pt-5">
      <h1 className="vt323 text-7xl sm:text-9xl ml-5 sm:ml-10 ">La57</h1>
      <a href="https://github.com/fah3m/La57"><img src="git.png" alt="das" className="h-20 mr-5 pt-3 max-sm:h-15  "/></a>
      </div>

      <div className="flex justify-center w-screen mt-10 sm:mt-20 px-5">
        <div className="w-full sm:w-[70vw] lg:w-[60vw]">
          <div className="bg-black/70 p-3 h-20">
            <h2 className="text-center vt323 text-3xl sm:text-5xl">
              chemistry at its peak
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <input
              type="text"
              className="h-15 p-3 mt-5 bg-black/70 text-white focus:outline-none w-full sm:w-[42vw] outfit"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Enter Your Word & Check If Chem Got It"
            />

            <button
              className="h-15 p-3 mt-5 bg-black/70 transition-all duration-150 hover:bg-black/40 hover:scale-105 active:bg-black text-white w-full sm:w-[13vw]"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

          <div className="mt-5 text-white">
            {failed ? (
              <p className="text-red-300 vt323 text-4xl pl-3">Not possible</p>
            ) : result && result.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {result.map((el, i) => (
                  <div key={i} className="bg-black/70 p-3 rounded-xl">
                    <h3 className="text-4xl vt323">{el.symbol}</h3>
                    <p className="text-xl">{el.name}</p>
                    <p>Atomic No: {el.number}</p>
                    <p>Mass: {el.mass}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* floating elems */}
      <img src="anu.png" alt="das" className="h-50 top-0 absolute right-1/4 max-sm:h-30"/>
      <img src="anuk.png" alt="das" className="h-60 top-1/2 absolute right-1/8 max-sm:h-30"/>
      <img src="cat.png" alt="das" className="h-30 top-40 absolute left-1/4 max-sm:h-15"/>
      <img src="issan.png" alt="das" className="h-50 bottom-0 absolute left-1/6 max-sm:h-15 max-sm:bottom-40"/>
      <img src="kev.png" alt="das" className="h-15 bottom-0 fixed right-0"/>
    </div>
  );
}

export default App;
