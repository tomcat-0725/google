
document.addEventListener('DOMContentLoaded', () => {
    const contentStream = document.getElementById('content-stream');

    const templates = {
        question: document.getElementById('question-card-template'),
        poll: document.getElementById('poll-card-template'),
        fact: document.getElementById('fact-card-template'),
        quote: document.getElementById('quote-card-template'),
    };

    const contentData = [
        // ... (Your existing and new content data will go here)
        {
            type: 'question',
            text: 'If you try to fail, and succeed, which have you done?',
            image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            type: 'poll',
            text: 'Is a hotdog a sandwich?',
            options: ['Yes, definitely', 'No, it\'s a taco', 'It is its own category'],
            image: 'https://images.unsplash.com/photo-1528738093239-4b8a2a75b22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            type: 'fact',
            front: 'Did you know?',
            back: 'A group of flamingos is called a flamboyance.',
            image: 'https://images.unsplash.com/photo-1533035336493-29a321935654?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            type: 'quote',
            text: 'The only way to do great work is to love what you do.',
            author: 'Steve Jobs',
            image: 'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            type: 'question',
            text: 'What is the color of a mirror?',
            image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
    ];

    const createCard = (item) => {
        const template = templates[item.type];
        if (!template) return null;

        const card = template.content.cloneNode(true).firstElementChild;
        card.style.backgroundImage = `url(${item.image})`;

        switch (item.type) {
            case 'question':
                card.querySelector('.card-text').textContent = item.text;
                break;
            case 'poll':
                card.querySelector('.card-text').textContent = item.text;
                const optionsContainer = card.querySelector('.poll-options');
                item.options.forEach(optionText => {
                    const option = document.createElement('div');
                    option.className = 'poll-option';
                    option.innerHTML = `<span class="option-text">${optionText}</span><div class="percentage-bar"></div>`;
                    optionsContainer.appendChild(option);
                });
                break;
            case 'fact':
                card.querySelector('.card-front .card-text').textContent = item.front;
                card.querySelector('.card-back .card-text').textContent = item.back;
                break;
            case 'quote':
                card.querySelector('.card-text').textContent = `"${item.text}"`;
                card.querySelector('cite').textContent = `- ${item.author}`;
                break;
        }

        return card;
    };

    const loadMoreContent = () => {
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * contentData.length);
            const newItem = contentData[randomIndex];
            const newCard = createCard(newItem);
            if (newCard) {
                contentStream.appendChild(newCard);
            }
        }
    };

    // Initial Load
    loadMoreContent();

    // Event Delegation for card interactions
    contentStream.addEventListener('click', (e) => {
        const target = e.target;

        // Like button
        if (target.closest('.like-btn')) {
            const likeBtn = target.closest('.like-btn');
            likeBtn.classList.toggle('liked');
            const likeCount = likeBtn.querySelector('.like-count');
            let count = parseInt(likeCount.textContent);
            likeCount.textContent = likeBtn.classList.contains('liked') ? count + 1 : count - 1;
            return; // Prevent other events from firing
        }

        // Share button
        if (target.closest('.share-btn')) {
            navigator.clipboard.writeText('Check out this cool content from Dopamine Flow!');
            alert('Link copied to clipboard!');
            return;
        }

        // Copy button for quotes
        if (target.closest('.copy-btn')) {
            const card = target.closest('.quote-card');
            const text = card.querySelector('blockquote').textContent;
            const author = card.querySelector('cite').textContent;
            navigator.clipboard.writeText(`${text} ${author}`);
            alert('Quote copied to clipboard!');
            return;
        }
        
        // Poll option
        if (target.closest('.poll-option')) {
            const pollCard = target.closest('.poll-card');
            if (pollCard.classList.contains('voted')) return;
            pollCard.classList.add('voted');

            const options = pollCard.querySelectorAll('.poll-option');
            // Simulate poll results
            options.forEach(opt => {
                const percentage = Math.floor(Math.random() * 80) + 10; // random % between 10-90
                opt.querySelector('.percentage-bar').style.width = `${percentage}%`;
                opt.querySelector('.option-text').textContent += ` (${percentage}%)`;
            });
            return;
        }

        // Fact card flip
        if (target.closest('.fact-card')) {
            target.closest('.fact-card').classList.toggle('is-flipped');
        }
    });

    // Infinite Scroll
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            loadMoreContent();
        }
    }, { rootMargin: '200px' });

    // Function to observe the last card
    const observeLastCard = () => {
        const lastCard = contentStream.querySelector('.card:last-child');
        if (lastCard) {
            observer.observe(lastCard);
        }
    };

    // Initial observation
    observeLastCard();

    // Re-observe after new content is loaded
    const mutationObserver = new MutationObserver(observeLastCard);
    mutationObserver.observe(contentStream, { childList: true });
});
