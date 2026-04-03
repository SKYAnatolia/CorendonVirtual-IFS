// Mobil dropdown toggle
document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown > a');
    
    dropdowns.forEach(drop => {
        drop.addEventListener('click', function(e) {
            if(window.innerWidth <= 768) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('active');
            }
        });
    });
    
    // Apply form submission
    const applyForm = document.getElementById('applicationForm');
    if(applyForm) {
        applyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Başvurunuz alındı! En kısa sürede size dönüş yapacağız.');
            this.reset();
        });
    }
});