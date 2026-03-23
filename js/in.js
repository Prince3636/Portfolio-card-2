// Disable right-click
$(document).on("contextmenu", function (e) {
    e.preventDefault();
});

// Disable specific keys
$(document).keydown(function (e) {
    // Block F12, F6, /, etc.
    if (
        e.which === 123 || // F12
        e.which === 114 || // F3
        e.which === 191    // /
    ) {
        return false;
    }

    // Block Ctrl + keys
    if (e.ctrlKey) {
        const blockedKeys = ['A', 'S', 'U', 'H', 'F', 'E', 'K', 'L', 'G', 'P', 'O'];
        if (blockedKeys.includes(String.fromCharCode(e.which))) {
            return false;
        }
    }

    // Block Ctrl + Shift + keys
    if (e.ctrlKey && e.shiftKey) {
        const blockedKeys = ['I', 'J', 'C'];
        if (blockedKeys.includes(String.fromCharCode(e.which))) {
            return false;
        }
    }
});
