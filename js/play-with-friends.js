// Set css variables for scale size, for scaling the chest image.
function scaleChest(scale) {
  const chest = document.getElementById("chest");
  chest.style = `--scale: ${1 + scale * 7}`;
}

// When submit form, show the firework image.
// To ensure user can see the animation, redirect to discord invite link after 1 sec.
function submitForm(e) {
  e.preventDefault();
  document.getElementById("submit-btn").disabled = true;
  document.getElementById("firework").classList.add("display");

  setTimeout(() => {
    document.getElementById("firework").classList.remove("display");
    document.getElementById("submit-btn").disabled = false;
    window.location.href = "https://discord.gg/6BHKSTT";
  }, 1000);
  return false;
}
