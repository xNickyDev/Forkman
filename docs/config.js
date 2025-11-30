window.$docsify = {
    name: '<div class="heading"><img type="image/png" src="./_media/icon.png" width="45" height="45" draggable="false">&nbsp;&nbsp;<strong style="color: var(--theme-color);">Forkman</strong></div>',
    nameLink: "./#/home",
    homepage: "home.md",
    auto2top: true,
    loadSidebar: true,
    loadNavbar: true,
    loadFooter: true,
    notFoundPage: true,
    executeScript: true,
    maxLevel: 2,
    alias: {
        '/.*/_sidebar.md': '/_sidebar.md'
    },
    sidebarDisplayLevel: 1,
    search: "auto",
    search: {
        noData: "No results!",
        paths: "auto",
        placeholder: "Search"
    },
    pagination: {
        crossChapter: true,
        crossChapterText: true
    },
    copyCode: {
        buttonText: "📋 Copy",
        errorText: "Error!",
        successText: "Copied!"
    },
    tabs: {
        persist: false,
        sync: false,
        theme: "classic",
        tabComments: true,
        tabHeadings: true
    },
    themeColor: "#FA9405",
    darklightTheme: {
        siteFont: "Roboto Mono | Source Sans Pro",
        defaultTheme: "dark",
        codeFontFamily: "Roboto Mono | Source Sans Pro",
        bodyFontSize: "17px",
        dark: {
            accent: "#42b983",
            toogleBackground: "#ffffff",
            background: "#283339",
            textColor: "#b4b4b4",
            codeTextColor: "#ffffff",
            codeBackgroundColor: "#0e2233",
            borderColor: "#0d2538",
            blockQuoteColor: "#858585",
            highlightColor: "#d22778",
            sidebarSublink: "#b4b4b4",
            codeTypeColor: "#ffffff",
            coverBackground: 'linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%,hsl(181, 100%, 85%) 100%)',
            toogleImage: 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/sun.svg)'
        },
        light: {
            accent: "#42b983",
            toogleBackground: "#283339",
            background: "#ffffff",
            textColor: "#34495e",
            codeTextColor: "#525252",
            codeBackgroundColor: "#f8f8f8",
            borderColor: "rgba(0, 0, 0, 0.07)",
            blockQuoteColor: "#858585",
            highlightColor: "#d22778",
            sidebarSublink: "#b4b4b4",
            codeTypeColor: "#091a28",
            coverBackground: 'linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%,hsl(181, 100%, 85%) 100%)',
            toogleImage: 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/moon.svg)'
        }
    }
}