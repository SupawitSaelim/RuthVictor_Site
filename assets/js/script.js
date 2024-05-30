const newsArticles = [
    {
        title: "Ruth Victor (Thailand) is pleased to welcome the Sales team from IT Green",
        content: "Ruth Victor (Thailand) is pleased to welcome the Sales team from IT Green, who introduced excellent products from the \"Forcepoint\" brand. Forcepoint has long been a leader in the field, offering solutions that protect data from threats, data theft, and the safeguarding of sensitive information within organizations. Their solutions include Endpoint DLP, which defends against internal and external threats, and comprehensive Cyber Security solutions that enhance cyber security. These solutions significantly bolster organizational data security.",
        date: "2024-05-20",
        image: "images/News/IT_Green.jpg"
    },
    {
        title: "Ruth Victor (Thailand) had the opportunity to welcome VST ECS",
        content: "Ruth Victor (Thailand) had the opportunity to welcome VST ECS, who came to present the products and promotions of Allied Telesis. Allied Telesis offers a range of network and information technology solutions, such as switches, routers, wireless access points, and network security. Additionally, Allied Telesis provides other products and services to meet customer needs in networking and various connectivity technologies.",
        date: "2024-04-19",
        image: "images/News/vs_tech.jpg"
    },
    {
        title: "Merry Christmas !",
        content: "The company would like to announce that it will be closed from December 29, 2023, to January 2, 2024, due to the New Year festival. However, you can still contact us via email and personal phone numbers.",
        date: "2023-12-28",
        image: "images/News/christmas.jpg"
    },
    {
        title: "3",
        content: "The company would like to announce that it will be closed from December 29, 2023, to January 2, 2024, due to the New Year festival. However, you can still contact us via email and personal phone numbers.",
        date: "2023-12-28",
        image: "images/News/christmas.jpg"
    },
];

function renderNews() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    // Sort news articles by date (newest first)
    newsArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Limit the number of articles shown initially
    const initialDisplayCount = 6;
    let displayCount = Math.min(newsArticles.length, initialDisplayCount);

    for (let i = 0; i < displayCount; i++) {
        newsContainer.appendChild(createNewsElement(newsArticles[i]));
    }

    // If there are more articles, show the "View More" button
    if (newsArticles.length > initialDisplayCount) {
        const viewMoreButton = document.createElement('button');
        viewMoreButton.textContent = 'View More';
        viewMoreButton.className = 'button primary';
        viewMoreButton.style = 'margin-left: 80%;margin-top: 5%';
        viewMoreButton.onclick = function () {
            for (let i = initialDisplayCount; i < newsArticles.length; i++) {
                newsContainer.appendChild(createNewsElement(newsArticles[i]));
            }
            viewMoreButton.style.display = 'none';
        };
        newsContainer.appendChild(viewMoreButton);
    }
}

function createNewsElement(article) {
    const articleElement = document.createElement('div');
    articleElement.className = 'news-article';

    const imageElement = document.createElement('img');
    imageElement.src = article.image;
    imageElement.alt = article.title;

    // Add click event listener to each image
    imageElement.addEventListener('click', function () {
        showPopup(article.image);
    });

    const contentElement = document.createElement('div');
    contentElement.className = 'news-article-content';

    const titleElement = document.createElement('h3');
    titleElement.textContent = article.title;

    const contentTextElement = document.createElement('p');
    contentTextElement.textContent = article.content;

    const dateElement = document.createElement('small');
    dateElement.textContent = article.date;

    contentElement.appendChild(titleElement);
    contentElement.appendChild(contentTextElement);
    contentElement.appendChild(dateElement);

    articleElement.appendChild(imageElement);
    articleElement.appendChild(contentElement);

    return articleElement;
}

// Function to show popup with image
function showPopup(imageSrc) {
    const popup = document.getElementById('news-popup');
    const popupImage = document.getElementById('popup-image');
    popupImage.src = imageSrc;
    popup.style.display = 'flex';

    // Close popup when clicking outside of the image
    popup.onclick = function (event) {
        if (event.target === popup) {
            closePopup();
        }
    };

    // Close popup when pressing "Esc" key
    document.onkeydown = function (event) {
        event = event || window.event;
        if (event.key === 'Escape') {
            closePopup();
        }
    };
}

// Function to close popup
function closePopup() {
    const popup = document.getElementById('news-popup');
    popup.style.display = 'none';
}

// Initial render
renderNews();
