document$.subscribe(function() {
    updateTheme(); // Update theme on AJAX page navigation
});

const lightModeStyle = '/assets/stylesheets/pygments/default.css';
const darkModeStyle = '/assets/stylesheets/pygments/github-dark.css';

function switchStyle(isDarkMode) {
    const desiredStyle = isDarkMode ? darkModeStyle : lightModeStyle;
    let pygmentsStyle = document.getElementById('pygments-style');

    if (!pygmentsStyle) {
        pygmentsStyle = document.createElement('link');
        pygmentsStyle.id = 'pygments-style';
        pygmentsStyle.rel = 'stylesheet';
        pygmentsStyle.type = 'text/css';
        document.body.appendChild(pygmentsStyle);
    }

    // Only update the href if it's different from the desired style
    if (pygmentsStyle.href.split('/').pop() !== desiredStyle.split('/').pop()) {
        pygmentsStyle.href = desiredStyle;
    }
}

function updateTheme() {
    const isDarkMode = document.body.getAttribute('data-md-color-scheme') === 'slate';
    switchStyle(isDarkMode);
}

// MutationObserver for theme changes
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.attributeName === 'data-md-color-scheme') {
            updateTheme();
        }
    });
});

observer.observe(document.body, { attributes: true });

// Initial theme update
updateTheme();
