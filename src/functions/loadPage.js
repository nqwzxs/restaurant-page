const loadPage = function(page) {
    const content = document.querySelector('#content');

    content.children[1].remove();
    content.append(page());
}

export default loadPage;