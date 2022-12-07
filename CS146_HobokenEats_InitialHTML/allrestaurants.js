var filter = [true, true, true, true, true, true, true, true,];
var classes = ['p', 'pp', 'ppp', 'Indian', 'Italian', 'American', 'Latin', 'Asian'];

function checkbox(className) {
    var index = classes.indexOf(className);
    filter[index] = filter[index] ? false : true;
    for (var i = 0; i < 3; i++) {
        var elements = document.getElementsByClassName(classes[i]);
        elements = Array.from(elements);
        for (var j = 0; j < elements.length; j++)
            elements[j].style.setProperty('display', "table-cell");
    }

    for (var i = 0; i < 8; i++) {
        var elements = document.getElementsByClassName(classes[i]);
        elements = Array.from(elements);
        for (var j = 0; j < elements.length; j++)
            if (!filter[i])
                elements[j].style.setProperty('display', "none");
    }

}
