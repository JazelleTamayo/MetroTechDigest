function navigationContent(navigationBar) {
            document.querySelectorAll('article').forEach(article => {
                article.style.display = "none";
            });

            document.getElementById(navigationBar).style.display = "block";
        }