window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

window.gtag = gtag;
gtag("js", new Date());

if (window.location.hostname === "nucleoid.com") {
  gtag("config", "G-L9H12K94J4", {
    send_page_view: false,
  });
}
