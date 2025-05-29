         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
     
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black');
                navbar.classList.remove('bg-audi-dark');
            } else {
                navbar.classList.remove('bg-black');
                navbar.classList.add('bg-audi-dark');
            }
        });
        
       
        const modelCards = document.querySelectorAll('.model-card');
        modelCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.querySelector('.card-img-top').style.transform = 'scale(1.05)';
            });
            card.addEventListener('mouseleave', function() {
                this.querySelector('.card-img-top').style.transform = 'scale(1)';
            });
        });