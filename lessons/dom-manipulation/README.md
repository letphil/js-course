## dom-manipulation

```
javascript can be used to manipulate the dom (document object model) of a webpage. the dom is a tree-like structure that represents the elements of a webpage. it can be accessed and modified using javascript.



### syntax:

```

document.getElementById('id').innerHTML = 'new content';

to get an element by id
document.getElementById('id');

to get a elements by class
document.getElementsByClassName('class');

to get a elements by query
document.querySelector('query');

to get a elements by query all
document.querySelectorAll('query');

attributes can be accessed and modified using the getAttribute and setAttribute methods
element.getAttribute('attribute');

element.setAttribute('attribute', 'value');

<style>
    .make-blue: {
      background-color: blue;
    }
</style>

<div id='shay-div' class='make-blue' />
<img src='http://logo' >

img.setAttrivbute('src', "new image')
const element = document.getElementById('shay-div')

element.setAttribute('class', 'make-blue')

to add a class to an element
element.classList.add('class');

to remove a class from an element
element.classList.remove('class');

```

```
