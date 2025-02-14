document.addEventListener('DOMContentLoaded', function () {
    const variantSelector = document.querySelector("select.product-single__variants");
    var preorderButton = document.querySelector('#button_preorder');

    if (variantSelector && preorderButton) {
        function checkVariantAvailability() {
            let selectedOption = variantSelector.options[variantSelector.selectedIndex];

            if (selectedOption.hasAttribute("disabled")) {
                preorderButton.classList.remove("tw-hidden");
            } else {
                preorderButton.classList.add("tw-hidden");
            }
        }

        variantSelector.addEventListener("change", checkVariantAvailability);
        checkVariantAvailability();
    }

    if (preorderButton) {
        preorderButton.addEventListener('click', function (event) {
            event.preventDefault();
            
            let selectedVariantId = document.querySelector('select[name="id"]').value;
            
            function addToCart(variantId) {
                let formData = new URLSearchParams();
                formData.append("id", variantId);
                formData.append("quantity", 1);
                formData.append("properties[Pre-order]", "Estimated to Ship {{ formatted_date }}");

                fetch('/cart/add.js', {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: formData.toString()
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Pre-order product added to cart!");
                    document.dispatchEvent(new CustomEvent('ajaxProduct:added', { detail: { product: data } }));
                    openCartDrawer();
                })
                .catch(error => console.error("Error adding to cart:", error));
            }

            function openCartDrawer() {
                if (theme && theme.CartDrawer) {
                    theme.CartDrawer.prototype.open();
                } else {
                    console.warn("CartDrawer not found.");
                }
            }

            addToCart(selectedVariantId);
        });
    }
});
