document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.closest(".faq-item"); 
      answer.classList.toggle('active');
    });
  });
  