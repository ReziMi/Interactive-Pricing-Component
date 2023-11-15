// Function to update the displayed price and pageviews based on the range value and billing type
function updatePriceAndPageviews() {
    let priceRange = document.getElementById('priceRange');
    let priceDisplay = document.getElementById('priceDisplay');
    let pageviewsDisplay = document.getElementById('pageviewsDisplay');
    let toggleBilling = document.getElementById('toggleBilling');

    // Define the prices and corresponding pageviews
    let data = [
        { price: 8, pageviews: '10K' },
        { price: 12, pageviews: '50K' },
        { price: 16, pageviews: '100K' },
        { price: 24, pageviews: '500K' },
        { price: 36, pageviews: '1M' }
    ];

    // Get the selected range value
    let selectedValue = priceRange.value;

    // Calculate the discount based on billing type
    let discount = toggleBilling.checked ? 12*0.75 : 1; // 25% discount for yearly billing

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
  let x = parseInt(priceRange.value)-1;
  let color = `linear-gradient(90deg, #A4F3EB ${x*25}%, #ECF0FB ${x*25}%)`;
  priceRange.style.background = color;
});


