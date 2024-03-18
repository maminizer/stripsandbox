/**
 * Preload fonts
 * @param {String} id
 */
const preloadFonts = (id) => {
  return new Promise((resolve) => {
    WebFont.load({
      typekit: {
        id: id,
      },
      active: resolve,
    });
  });
};

/**
 * Gets the height of an element without counting with the padding
 * @param {Element} el
 */
const getHeight = (el) => {
  const computedStyle = getComputedStyle(el);

  let elementHeight = el.clientHeight; // height with padding
  elementHeight -=
    parseFloat(computedStyle.paddingTop) +
    parseFloat(computedStyle.paddingBottom);
  return elementHeight;
};

const calcWinsize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

const adjustedBoundingRect = (el) => {
  var rect = el.getBoundingClientRect();
  var style = getComputedStyle(el);
  var tx = style.transform;

  if (tx) {
    var sx, sy, dx, dy;
    if (tx.startsWith("matrix3d(")) {
      var ta = tx.slice(9, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[5];
      dx = +ta[12];
      dy = +ta[13];
    } else if (tx.startsWith("matrix(")) {
      var ta = tx.slice(7, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[3];
      dx = +ta[4];
      dy = +ta[5];
    } else {
      return rect;
    }

    var to = style.transformOrigin;
    var x = rect.x - dx - (1 - sx) * parseFloat(to);
    var y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
    var w = sx ? rect.width / sx : el.offsetWidth;
    var h = sy ? rect.height / sy : el.offsetHeight;
    return {
      x: x,
      y: y,
      width: w,
      height: h,
      top: y,
      right: x + w,
      bottom: y + h,
      left: x,
    };
  } else {
    return rect;
  }
};

const wrapLines = (arr, wrapType, wrapClass) => {
  arr.forEach((el) => {
    const wrapEl = document.createElement(wrapType);
    wrapEl.classList = wrapClass;
    el.parentNode.appendChild(wrapEl);
    wrapEl.appendChild(el);
  });
};

export {
  calcWinsize,
  adjustedBoundingRect,
  preloadFonts,
  getHeight,
  wrapLines,
};
