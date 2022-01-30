import { useEffect } from 'react';
import Head from 'next/head';
import BaseLayout from '@layouts/BaseLayout';

import HomepageStyles from '@styles/HomepageStyles';

const Home = () => {

  useEffect(() => {
    atvImg();
  }, []);

  const atvImg = () => {
    // TODO
    var d = document,
      de = d.documentElement,
      bd = d.getElementsByTagName("body")[0],
      htm = d.getElementsByTagName("html")[0],
      win = window,
      imgs = d.querySelectorAll(".atvImg"),
      totalImgs = imgs.length,
      supportsTouch = "ontouchstart" in win || navigator.msMaxTouchPoints;

    if (totalImgs <= 0) {
      return;
    }

    for (var l = 0; l < totalImgs; l++) {
      var thisImg = imgs[l],
        layerElems = thisImg.querySelectorAll(".atvImg-layer"),
        totalLayerElems = layerElems.length;

      if (totalLayerElems <= 0) {
        continue;
      }

      while (thisImg.firstChild) {
        thisImg.removeChild(thisImg.firstChild);
      }

      var containerHTML = d.createElement("a"),
        shineHTML = d.createElement("div"),
        shadowHTML = d.createElement("div"),
        layersHTML = d.createElement("div"),
        layers = [];

      thisImg.id = "atvImg__" + l;
      containerHTML.className = "atvImg-card-container";
      containerHTML.title = "View résumé"
      containerHTML.setAttribute("rel", "noopener noreferrer")
      containerHTML.setAttribute("target", "_blank")
      containerHTML.href = '/Georgi_Dimulski_Resume.pdf'
      shineHTML.className = "atvImg-shine";
      shadowHTML.className = "atvImg-shadow";
      layersHTML.className = "atvImg-layers";

      for (var i = 0; i < totalLayerElems; i++) {
        var layer = d.createElement("div"),
          imgSrc = layerElems[i].getAttribute("data-img");

        layer.className = "atvImg-rendered-layer";
        layer.setAttribute("data-layer", i);
        layer.style.backgroundImage = "url(" + imgSrc + ")";
        layersHTML.appendChild(layer);

        layers.push(layer);
      }

      containerHTML.appendChild(shadowHTML);
      containerHTML.appendChild(layersHTML);
      containerHTML.appendChild(shineHTML);
      thisImg.appendChild(containerHTML);

      var w =
        thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
      thisImg.style.transform = "perspective(" + w * 3 + "px)";

      if (supportsTouch) {
        win.preventScroll = false;

        (function (_thisImg, _layers, _totalLayers, _shine) {
          thisImg.addEventListener("touchmove", function (e) {
            if (win.preventScroll) {
              e.preventDefault();
            }
            processMovement(e, true, _thisImg, _layers, _totalLayers, _shine);
          });
          thisImg.addEventListener("touchstart", function (e) {
            win.preventScroll = true;
            processEnter(e, _thisImg);
          });
          thisImg.addEventListener("touchend", function (e) {
            win.preventScroll = false;
            processExit(e, _thisImg, _layers, _totalLayers, _shine);
          });
        })(thisImg, layers, totalLayerElems, shineHTML);
      } else {
        (function (_thisImg, _layers, _totalLayers, _shine) {
          thisImg.addEventListener("mousemove", function (e) {
            processMovement(
              e,
              false,
              _thisImg,
              _layers,
              _totalLayers,
              _shine
            );
          });
          thisImg.addEventListener("mouseenter", function (e) {
            processEnter(e, _thisImg);
          });
          thisImg.addEventListener("mouseleave", function (e) {
            processExit(e, _thisImg, _layers, _totalLayers, _shine);
          });
        })(thisImg, layers, totalLayerElems, shineHTML);
      }
    }

    function processMovement(
      e,
      touchEnabled,
      elem,
      layers,
      totalLayers,
      shine
    ) {
      var bdst = bd.scrollTop || htm.scrollTop,
        bdsl = bd.scrollLeft,
        pageX = touchEnabled ? e.touches[0].pageX : e.pageX,
        pageY = touchEnabled ? e.touches[0].pageY : e.pageY,
        offsets = elem.getBoundingClientRect(),
        w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth,
        h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight,
        wMultiple = 210 / w,
        offsetX = 0.52 - (pageX - offsets.left - bdsl) / w,
        offsetY = 0.52 - (pageY - offsets.top - bdst) / h,
        dy = pageY - offsets.top - bdst - h / 2,
        dx = pageX - offsets.left - bdsl - w / 2,
        yRotate = (offsetX - dx) * (0.07 * wMultiple),
        xRotate = (dy - offsetY) * (0.1 * wMultiple),
        imgCSS = "rotateX(" + xRotate + "deg) rotateY(" + yRotate + "deg)",
        arad = Math.atan2(dy, dx),
        angle = (arad * 180) / Math.PI - 90;

      if (angle < 0) {
        angle = angle + 360;
      }

      if (elem.firstChild.className.indexOf(" over") != -1) {
        imgCSS += " scale3d(1.07,1.07,1.07)";
      }
      elem.firstChild.style.transform = imgCSS;

      shine.style.background =
        "linear-gradient(" +
        angle +
        "deg, rgba(255,255,255," +
        ((pageY - offsets.top - bdst) / h) * 0.4 +
        ") 0%,rgba(255,255,255,0) 80%)";
      shine.style.transform =
        "translateX(" +
        offsetX * totalLayers -
        0.1 +
        "px) translateY(" +
        offsetY * totalLayers -
        0.1 +
        "px)";

      var revNum = totalLayers;
      for (var ly = 0; ly < totalLayers; ly++) {
        layers[ly].style.transform =
          "translateX(" +
          offsetX * revNum * ((ly * 2.5) / wMultiple) +
          "px) translateY(" +
          offsetY * totalLayers * ((ly * 2.5) / wMultiple) +
          "px)";
        revNum--;
      }
    }

    function processEnter(e, elem) {
      elem.firstChild.className += " over";
    }

    function processExit(e, elem, layers, totalLayers, shine) {
      var container = elem.firstChild;

      container.className = container.className.replace(" over", "");
      container.style.transform = "";
      shine.style.cssText = "";

      for (var ly = 0; ly < totalLayers; ly++) {
        layers[ly].style.transform = "";
      }
    }
  }

  return (
    <>
      <Head>
        <title>Georgi Dimulski | Web Developer</title>
        <meta name="description" content="Georgi Dimulski's personal website" />
      </Head>

      {/* TODO: rename classes */}
      <BaseLayout
        content={
          <>
            <div className="home">
              <section className="home__hero">
                <div className="home__hero-body">
                  <div className="home__hero-container">
                    <div className="home__hero-container-inner">
                      <div className="home__hero-left">
                        <span><strong>Hi there!</strong></span>
                        <span>My name is</span>
                        <span className="home__hero-name"><strong>Georgi Dimulski,</strong></span>
                        <span>I’m a web developer,</span>
                        <span>live in <strong>Plovdiv.</strong></span>
                        <span>Check out my blog and résumé. 😎</span>
                      </div>
                      <div className="home__hero-right">
                        <div className="home__hero-right-container">
                          <div className="home__hero-right-cover cover atvImg">
                            <div className="atvImg-layer" data-img="/resume.png"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <style jsx>{HomepageStyles}</style>
          </>
        }
      />
    </>
  );
};

// Home.getInitialProps = async (ctx) => {
//   console.log(window.matchMedia("(prefers-color-scheme: dark)"));
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }


export async function getStaticProps(ctx) {
  // const loginData = await authService.login('test@email.com', 'password123');

  // return {
  //   props: {
  //     ...(await serverSideTranslations(locale, ['common'])),
  //     loginData: loginData
  //   },
  //   revalidate: 60
  // };
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home;
