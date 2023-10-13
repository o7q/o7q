let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

innerCursor.style.left = `100%`;
innerCursor.style.top = `100%`;
outerCursor.style.left = `100%`;
outerCursor.style.top = `100%`;

document.addEventListener("mousemove", moveCursor);

function moveCursor(e)
{
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

function cursor_grow()
{
    innerCursor.classList.add("grow");
    outerCursor.classList.add("grow");
}

function cursor_shrink()
{
    innerCursor.classList.remove("grow");
    outerCursor.classList.remove("grow");
}

function cursor_growSquare()
{
    innerCursor.classList.add("growSquare");
    outerCursor.classList.add("growSquare");
}

function cursor_shrinkSquare()
{
    innerCursor.classList.remove("growSquare");
    outerCursor.classList.remove("growSquare");
}