let CATS = [];
function spawnCats(amount)
{
    for (let i = 0; i < amount; i++) {
        CATS.push(new Cat());
    }
}