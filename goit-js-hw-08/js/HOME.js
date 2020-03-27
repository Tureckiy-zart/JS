("use strict");

чтобы "click" ловило тольк на клопне а не на родителе.

function hendleClick(event) {
    if (event.target === event.currentTarget)
    return
}