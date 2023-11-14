// Function to update the displayed price and pageviews based on the range value and billing type
function updatePriceAndPageviews() {
    var priceRange = document.getElementById('priceRange');
    var priceDisplay = document.getElementById('priceDisplay');
    var pageviewsDisplay = document.getElementById('pageviewsDisplay');
    var toggleBilling = document.getElementById('toggleBilling');

    // Define the prices and corresponding pageviews
    var data = [
        { price: 8, pageviews: '10K' },
        { price: 12, pageviews: '50K' },
        { price: 16, pageviews: '100K' },
        { price: 24, pageviews: '500K' },
        { price: 36, pageviews: '1M' }
    ];

    // Get the selected range value
    var selectedValue = priceRange.value;

    // Calculate the discount based on billing type
    var discount = toggleBilling.checked ? 0.75 : 1; // 25% discount for yearly billing

    // Update the displayed price and pageviews with the discount
    priceDisplay.textContent = "$" + (data[selectedValue - 1].price * discount).toFixed(2);
    pageviewsDisplay.textContent = data[selectedValue - 1].pageviews + ' pageviews';
}

// Add an event listener to the range input
document.getElementById('priceRange').addEventListener('input', updatePriceAndPageviews);

// Add an event listener to the billing toggle
document.getElementById('toggleBilling').addEventListener('change', updatePriceAndPageviews);

// Initial call to set the default price and pageviews
updatePriceAndPageviews();


// changing color of the slider
priceRange.addEventListener("input", function() {
  var x = parseInt(priceRange.value)-1;
  var color = `linear-gradient(90deg, #A4F3EB ${x*25}%, #ECF0FB ${x*25}%)`;
  priceRange.style.background = color;
});


