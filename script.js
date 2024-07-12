document.addEventListener('DOMContentLoaded', () => {

    const ratings = document.querySelectorAll('.rating');
    const submitBtn = document.querySelector('.submit');
    const card = document.querySelector('.card');
    const submittedCard = document.querySelector('.card-submitted');
    
    let ratingValue = '';

    ratings.forEach(rating => {
        rating.addEventListener('click', () => {
            ratingValue = rating.textContent;
            const selectedRating = document.querySelector('.selected-rating');
            if (selectedRating) {

                selectedRating.textContent = ratingValue; // Update displayed rating

                submitBtn.addEventListener('click', () => {
                    submittedCard.style.display = 'block';
                    card.style.display = 'none';
                });
            }
        });
    });
});
