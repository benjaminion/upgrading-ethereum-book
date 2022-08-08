// --- Handle opening of <details> elements when printing ---

// Open closed details elements for printing
window.addEventListener('beforeprint', () => {
  const allDetails = document.body.querySelectorAll('details');
  for (let i = 0; i < allDetails.length; i++) {
    if (allDetails[i].open) {
      allDetails[i].dataset.open = '1';
    } else {
      allDetails[i].setAttribute('open', '');
    }
  }
});

// After printing close details elements not opened before
window.addEventListener('afterprint', () => {
  const allDetails = document.body.querySelectorAll('details');
  for (let i = 0; i < allDetails.length; i++) {
    if (allDetails[i].dataset.open) {
      allDetails[i].dataset.open = '';
    } else {
      allDetails[i].removeAttribute('open');
    }
  }
});

// --- Show tooltips for footnotes ---

window.addEventListener('load', function () {

  const fns = document.body.querySelectorAll('.footnote-ref');
  for (let i = 0; i < fns.length; i++) {

    // Append new span elements to all footnote links to hold the tooltip
    let fnSpan = document.createElement('span');
    fnSpan.className = 'fn-span';
    fns[i].parentElement.append(fnSpan);

    fns[i].addEventListener("mouseover", function(event) {
      let fnTooltip = event.target.parentElement.querySelector('span.fn-span');
      if (fnTooltip.innerHTML.trim() == '') {
        let fnSelector = event.target.attributes.href.textContent;
        fnTooltip.innerHTML = document.body.querySelector(fnSelector).innerHTML;
      }
    }, false);

  }
}, false);
