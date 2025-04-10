const filterButtons = document.querySelectorAll('.filter-btn');

const doctors = document.querySelectorAll('.doctor');

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const filterType = e.target.dataset.type; 

        doctors.forEach(doctor => {
            if (filterType === 'all' || doctor.getAttribute('data-specialty') === filterType) {
                doctor.style.display = 'block'; 
            } else {
                doctor.style.display = 'none'; 
            }
        });
    });
});
