$(document).ready(function() {
    // Add a click event to images to select them
    $('.gallery-image').click(function() {
        // Remove the selected class from all images
        $('.gallery-image').removeClass('selected');
        // Add the selected class to the clicked image
        $(this).addClass('selected');
    });

    // Add a click event to the animate button
    $('#animateButton').click(function() {
        // Find the selected image
        var selectedImage = $('.gallery-image.selected');

        if (selectedImage.length > 0) {
            // Animate the opacity and size of the selected image
            selectedImage.animate({
                opacity: 0.1,
                width: '300px',
                height: '200px'
            }, 1000, function() {
                // After the animation is complete, reset the image back to its original state
                selectedImage.animate({
                    opacity: 1,
                    width: '150px',
                    height: '100px'
                }, 1000);
            });
        } else {
            alert('Please select an image to animate.');
        }
    });
});
