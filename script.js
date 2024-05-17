document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = form.querySelector("#name").value;
      const email = form.querySelector("#email").value;
      const message = form.querySelector("#message").value;
  
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
      } else {
        // Here you can perform AJAX submission or any other action
        alert("Message sent successfully!");
        form.reset();
      }
    });
  });
  $(document).ready(function() {
    // Adjust grid columns and initialize lazy loading
    adjustGameListColumns();

    $(window).resize(function() {
        adjustGameListColumns();
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Filter games by category
    $('.filter-btn').on('click', function() {
        var category = $(this).data('category');

        if (category === 'all') {
            $('.game').fadeIn();
        } else {
            $('.game').fadeOut();
            $('.game[data-category="' + category + '"]').fadeIn();
        }
    });
});

function adjustGameListColumns() {
    var screenWidth = $(window).width();
    var columns = 3;

    if (screenWidth < 768) {
        columns = 1;
    } else if (screenWidth < 992) {
        columns = 2;
    }

    $('.game-list').css('grid-template-columns', 'repeat(' + columns + ', minmax(300px, 1fr))');
}
$(document).ready(function() {
    // ... (existing jQuery code) ...

    var cartItems = 0;

    // Adjust game list columns on page load and window resize
    adjustGameListColumns();

    $(window).resize(function() {
        adjustGameListColumns();
    });

    // Add to cart button click event
    $('.buy-now-btn').on('click', function() {
        cartItems++;
        updateCartCounter();
        showNotification();
    });

    // Update cart counter
    function updateCartCounter() {
        $('#cart-counter').text(cartItems);
    }

    // Show notification
    function showNotification() {
        var notification = $('<div class="notification">Product added to cart!</div>');
        $('body').append(notification);
        setTimeout(function() {
            notification.fadeOut(function() {
                $(this).remove();
            });
        }, 2000);
    }
});

