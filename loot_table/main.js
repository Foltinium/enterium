document.addEventListener('DOMContentLoaded', function () {
    let elements = document.querySelectorAll('td');
    elements.forEach(element => {
        let text = element.textContent;
        if (text == 'Да') {
            element.style.cssText = 'background-color: #4caf4f6a; color: #00ff00';
        } else if (text == 'Нет') {
            element.style.cssText = 'background-color: #f443366a; color: #ff0000';
        }
    });
});