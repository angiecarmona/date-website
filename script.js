document.querySelector('.btn-yes').onclick = function() {
    // Hide the date.png and erm-fingers.gif images
    document.getElementById('date-img').style.display = 'none';
    document.getElementById('erm-fingers').style.display = 'none';
    
    // Show the can't wait.png image
    document.getElementById('cant-wait-img').style.display = 'block';
    
    // Show the oh-yay.gif image
    document.getElementById('oh-yay').style.display = 'block';
    
    // Hide both buttons
    document.querySelector('.btn-yes').style.display = 'none';
    document.querySelector('.btn-no').style.display = 'none';
};

document.querySelector('.btn-no').onmouseover = function(event) {
    const button = event.target;
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    // Calculate random positions within the container's boundaries
    const randomX = Math.random() * (containerRect.width - button.clientWidth);
    const randomY = Math.random() * (containerRect.height - button.clientHeight);

    // Update the button's position
    button.style.position = 'absolute'; // Ensure button's position is absolute
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
};
