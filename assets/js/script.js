// Sample news data
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
        title: "News Article 3",
        content: "Content for news article 3",
        date: "2024-05-27",
        image: "https://via.placeholder.com/150"
    }
];

// Function to render news articles
function renderNews() {
    const newsContainer = document.getElementById('news-container');

    // Clear existing content
    newsContainer.innerHTML = '';

    // Sort news articles by date (newest first)
    newsArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render each news article
    newsArticles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'news-article';

        const imageElement = document.createElement('img');
        imageElement.src = article.image;
        imageElement.alt = article.title;

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

        newsContainer.appendChild(articleElement);
    });
}

// Initial render
renderNews();
