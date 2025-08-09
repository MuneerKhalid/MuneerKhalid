// Optional: randomize starting rotation
document.querySelectorAll('.orbit').forEach(orbit => {
  const startAngle = Math.floor(Math.random() * 360);
  orbit.style.transform = `rotate(${startAngle}deg) translateX(${getRadius(orbit)}px)`;
});

function getRadius(el) {
  return parseInt(el.style.transform.match(/translateX\((\d+)px\)/)?.[1] || 200);
}
