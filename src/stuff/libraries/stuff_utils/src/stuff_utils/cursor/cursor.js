let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

innerCursor.style.left = `50%`;
innerCursor.style.top = `50%`;
outerCursor.style.left = `50%`;
outerCursor.style.top = `50%`;

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