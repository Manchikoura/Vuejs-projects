Le programme réalisé est un code basique dans un but d'apprentissage et de prise en main de vuejs3
Il s'agit d'un code permettant de réaliser un todo list à travers lequel il est possible d'ajouter des todos, de les modifier, de les supprimer et de les associer à une catégorie.

Les fichiers : 
 - index.html : code html présentant une interface utilisateur. Il affiche un formulaire permettant de réaliser les différentes fonctionnalités précédemment citées

 - todo.css : permet de donner du style à l'interface

 - todoList.js : il contient une instance de Vuejs qui permet de réaliser les différentes fonctionnalités du todo list à travers les fonctions suivantes :

    -> addTodo() : permet d'ajouter les valeurs saisies par l'utilisateur à la liste des todo (todoList) en leur associant une categorie 

    -> modifyTodo(index) : à partir de l'index de l'élément de la liste à modifier, cette fonction permet de remplacer une todo par une nouvelle valeur

    -> deleteTodo(index) : elle permet de supprimer une todo à partir de son index

    -> selectCategory(e) : permet de récupérer la valeur de la catégorie choisie dans la liste de sélection (select) en écoutant un événement

    -> getCategoryClass() : permet d'attribuer des couleurs aux différents todo saisis selon la categorie sélectionnée sur la base des classes css correspondantes