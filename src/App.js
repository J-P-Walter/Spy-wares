import "./App.css";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdFingerPrint } from "react-icons/io";

function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  // const [background, setBackground] = React.useState("");

  function update(e) {
    console.log(e);
    var x = e.clientX || e.touches[0].clientX;
    var y = e.clientY || e.touches[0].clientY;

    document.documentElement.style.setProperty("--cursorX", x + "px");
    document.documentElement.style.setProperty("--cursorY", y + "px");
  }

  function handleClick() {
    setIsVisible(!isVisible);
    // document.documentElement.style.setProperty("--flashlightSize", "200vmax");
  }

  return (
    <div>
      <AnimatePresence>
        {!isVisible && (
          <motion.div
            className="mystery"
            onMouseMove={update}
            onTouchMove={update}
            exit={{
              opacity: 0,
              transition: {
                duration: 2,
              },
            }}
          >
            <div>
              there is m
              <span>
                <div class="eye" onClick={handleClick}>
                  <div class="shut"></div>
                  <div class="ball"></div>
                </div>
                o
              </span>
              re
            </div>
            <p>than meets</p>
            <p>the eye</p>
          </motion.div>
        )}
      </AnimatePresence>
      {isVisible && (
        <div>
          <motion.div
            className="spotlight_bg"
            animate={{
              opacity: [1, 1, 1, 1, 1, 0],
            }}
            transition={{
              delay: 2,
              default: {
                duration: 6,
                times: [0.1, 0.25, 0.45, 0.65, 0.75, 1],
              },
            }}
          >
            <motion.div
              className="spotlight"
              animate={{
                scale: [1, 1.2, 1.2, 1.2, 1.2, 50],

                x: [null, -400, -100, 500, 0, 0],
                y: [null, -300, 200, 50, 0, 0],
              }}
              transition={{
                delay: 2,
                default: {
                  duration: 6,
                  times: [0.1, 0.25, 0.45, 0.65, 0.75, 1],
                },
              }}
            ></motion.div>
          </motion.div>
          <div className="seen">
            <div className="landing">
              <img
                src={"spy_woman.png"}
                alt="woman spy"
                className="woman-spy"
              />
              <div className="wrapper">
                <div className="title">Spy-ware</div>
                <h1>The Epicenter of Espionage</h1>
              </div>
              <img src={"spy_man.png"} alt="man spy" className="man-spy" />
            </div>
            <div className="footer">
              <button>Recruit</button>
              <button>Missions</button>
              <button>Gadgets</button>
              <button>Cars</button>
              <button>Top Secret</button>
            </div>
            <a
              href="https://github.com/J-P-Walter/Spy-wares"
              className="fingerprint"
            >
              <IoMdFingerPrint />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

/* <motion.div
            className="spotlight"
            animate={{
              scale: [1, 1.2, 1.2, 1.2, 1.2, 50],

              x: [null, -400, -100, 500, 0, 0],
              y: [null, -300, 200, 50, 0, 0],
            }}
            transition={{
              delay: 2,
              default: {
                duration: 6,
                times: [0.1, 0.25, 0.45, 0.65, 0.75, 1],
              },
            }}
          ></motion.div> */
