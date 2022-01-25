if (/mobi/i.test(ua)) {
    var elementNode = document.createElement('p');
        // createTextNode
        var textNode = document.createTextNode('Saludos');
 
        elementNode.appendChild(textNode);
        document.body.appendChild(elementNode);
    }

else{

}