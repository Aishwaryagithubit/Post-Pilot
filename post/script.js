function generateDesign() {
  const input = document.getElementById("designInput").value.toLowerCase();

  let layout = "";
  let font = "";
  let color = "";

  if (input.includes("sale") || input.includes("product")) {
    layout = "Instagram Carousel – highlight product features and benefits";
    font = "Montserrat Bold + Open Sans";
    color = "Red + White + Charcoal (strong contrast)";
  } else if (input.includes("festival") || input.includes("diwali")) {
    layout = "Instagram Story – festive background with CTA swipe up";
    font = "Playfair Display + Lato";
    color = "Orange + Deep Purple + Gold";
  } else if (input.includes("quote") || input.includes("mood")) {
    layout = "Minimal Poster – centered quote with clean design";
    font = "Raleway Light + Roboto";
    color = "Muted beige + Navy Blue + Off-white";
  } else {
    layout = "Simple Instagram Post – top image, bottom text";
    font = "Poppins + Arial";
    color = "Sky Blue + White + Gray";
  }

  document.getElementById("layoutOutput").textContent = layout;
  document.getElementById("fontOutput").textContent = font;
  document.getElementById("colorOutput").textContent = color;
}

function copyDesign() {
  const text = `
Layout: ${document.getElementById("layoutOutput").textContent}
Font: ${document.getElementById("fontOutput").textContent}
Color Palette: ${document.getElementById("colorOutput").textContent}
  `;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  });
}
