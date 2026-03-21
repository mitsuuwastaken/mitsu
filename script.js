// Subtle interactive effects

document.addEventListener('DOMContentLoaded', () => {
    // Parallax background blobs that subtly follow the cursor
    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');
    const blob3 = document.querySelector('.blob-3');

    // Only apply effect on non-touch devices for performance
    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            // Calculate translation (subtle movement opposite to mouse)
            const moveX1 = (x - 0.5) * -80;
            const moveY1 = (y - 0.5) * -80;
            
            const moveX2 = (x - 0.5) * 60;
            const moveY2 = (y - 0.5) * 60;

            const moveX3 = (x - 0.5) * -40;
            const moveY3 = (y - 0.5) * -40;

            // Apply transforms smoothly
            if(blob1) blob1.style.transform = `translate(${moveX1}px, ${moveY1}px)`;
            if(blob2) blob2.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
            if(blob3) blob3.style.transform = `translate(${moveX3}px, ${moveY3}px)`;
        });
    }
});
