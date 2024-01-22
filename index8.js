// javascript: nested
function add() {
    console.log('add function');

    function fn() {
        console.log('inner function');
    }

    fn();
}

add();

