function createTicks() {
    var content = "";
    for (var i = 0; i < 6180; i++) {
        var dist = i * 300 * 100000;
        var label = dist.toLocaleString('en-US') + " miles";
        var current = `<div style="height: 10px; width: 1px; background-color: white;">
            <h4>${label}</h4>
            </div>
        <div style="height: 300px; width: 300px;"></div>`
        content += current;
    }
    document.getElementById("ticks").innerHTML = content;
}

createTicks();

function nFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}