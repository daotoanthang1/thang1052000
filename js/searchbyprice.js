document.addEventListener("DOMContentLoaded", function () {
    var firstPrice = document.querySelector("#first-price");
    var lastPrice = document.querySelector("#last-price");
    var s_productItem = document.getElementsByClassName("s_productItem");
    var check = document.getElementById("check");
    var priceProduct = document.getElementsByClassName("productItemPriceNew");
    var buttonClicked = document.querySelector(".find");
    var wrapperNewProducts = document.getElementsByClassName("wrapperNewProducts");
    buttonClicked.addEventListener("click", function () {
        var valueFirstPrice = firstPrice.value;
        var valueLastPrice = lastPrice.value;
       check.innerHTML = '';
        for (let i = 0; i < s_productItem.length; i++) {
            var innerTxtPriceProduct = priceProduct[i].innerText;

            var priceProducts = parseFloat(innerTxtPriceProduct);

            var realPriceProducts = Math.round(priceProducts * 1000);


            if (realPriceProducts >= valueFirstPrice && realPriceProducts <= valueLastPrice){
                    var imgSrc = document.getElementsByClassName("product-img")[i].src;
                    var titleProduct = document.getElementsByClassName("title")[i].innerText;
                    var priceProducts = document.getElementsByClassName("productItemPriceNew")[i].innerText;
                    var itemFilter = `<div class="s_productItemInfo">
                    <div class="s_productPhoto">
                        <a href=""><img class="product-img" src="${imgSrc}" alt=""></a>
                        <div class="heartFavorite"><i class="far fa-heart"></i></div>
                        <button class="btn btn-info my-view-btn">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </button>
                        <button class="btn btn-success add-to-card">
                            <i class="fa fa-cart-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="s_productDetaillInfo">
                        <div class="title">
                            <a href="">${titleProduct}</a>
                        </div>
                        <div class="productItemPrice">
                            <div class="productItemPriceNew">${priceProducts}</div>
                        </div>
                    </div>
                </div>`;
                check.innerHTML += itemFilter;
                }
                
                
            }
        }
    )
})