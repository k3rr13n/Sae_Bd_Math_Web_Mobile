// recuperer tache -> fetch sur api + resultat dans console -> modif dom

const url = "http://127.0.0.1:5000/todo/api/v1.0/tasks"
var recup_task = 0

// Affiche les taches, les taches sont clickables
let button = document.querySelector('#button');
button.addEventListener('click', async function(e){
    recup_task = 1
    let reponse = await fetch(url);
    let user = await reponse.json();
    console.log(user);

    var tsk_count = Object.keys(user["tasks"]).length;
    afficher_tasks(tsk_count, user["tasks"]);

    let tasks = document.querySelector('nav>div>ul').children;
    tasks = Array.from(tasks)
    tasks.forEach(task => {
        task.addEventListener('click', async function(e){
            for(let i=0;i<tsk_count;i++){
                if(user["tasks"][i]["title"] == task.textContent){
                    console.log(task.textContent)
                    afficher_detail_task(user["tasks"][i])

                    let elements = document.querySelector('#currenttask>div');
                    elements.addEventListener('click', async function(e){
                        edit_tasks(user["tasks"][i]["uri"], user["tasks"][i])
                    })
                }
            }
        });
    });
});

// Fonction qui permet d'afficher les taches du json distant
function afficher_tasks(nb_tasks, tasks){
    let nav = document.body.querySelector("nav>div");
    nav.innerHTML = "";

    let list = document.createElement('ul');
    for(let i=0;i<nb_tasks;i++){
        let task_li = document.createElement('li');

        let task_name = document.createTextNode(tasks[i]["title"]);
        task_li.appendChild(task_name)
        list.appendChild(task_li);
    }
    nav.appendChild(list);
}

// Fonction qui permet d'afficher le contenu d'une tache si celle ci est selectionnée
function afficher_detail_task(task){
    let article = document.body.querySelector("#currenttask");
    article.innerHTML = "";

    let task_detail = document.createElement('div')

    let titre = document.createElement('h3')
    let titre_val = document.createTextNode(task["title"])
    titre.appendChild(titre_val)

    let description = document.createElement('p')
    let description_val = document.createTextNode('Description : ' + task["description"])
    description.appendChild(description_val)

    let done = document.createElement('p')
    if(task["done"] == true){
        var done_val = document.createTextNode('Tache terminée')
    }
    else{
        var done_val = document.createTextNode('Tache en cours')
    }
    done.appendChild(done_val)

    task_detail.appendChild(titre)
    task_detail.appendChild(description)
    task_detail.appendChild(done)

    article.appendChild(task_detail);
}

// Permet de créer une nouvelle tache si l'on clique sur le bouton add
let button_add = document.querySelector('#add');
button_add.addEventListener('click', async function(e){
    let title_ok = true

    let reponse = await fetch(url);
    let user = await reponse.json();
    var tsk_count = Object.keys(user["tasks"]).length;

    let title = prompt("Quel est le titre de votre nouvelle tache?")
    let description = prompt("Quel est la description de votre nouvelle tache?")
    let done = false

    for(let i=0;i<tsk_count;i++){
        if(user["tasks"][i]["title"] == title ){
            title_ok = false
        }
    }

    if(title_ok == true){
        if(title != null & description != null){
            let new_task = await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ title: title, description: description, done: done })
            })
            console.log(new_task)
        }
        else{
            alert("Votre tache n'a pas pu etre créée car l'un des champ est null")
        }
    }
    else{
        alert("Votre tache n'a pas pu etre créée car le titre existe deja")
    }
});

// Fonction qui permet de modifier un élément
async function edit_tasks(url, element){
    let title = prompt("Le titre actuel (si vous ne souhaitez pas changer, appuyez sur ok)", element["title"])
    let description = prompt("La description actuel (si vous ne souhaitez pas changer, appuyez sur ok)", element["description"])
    let done = prompt("La tache est elle terminée (true/false)", element["done"])

    if(done == "true"){
        done = true
    }
    else{
        done = false
    }

    let update_task = await fetch(url, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ title: title, description: description, done: done })
    })
    console.log(update_task)
}

// Permet de supprimer une nouvelle tache si l'on clique sur le bouton del
let button_del = document.querySelector('#del');
button_del.addEventListener('click', async function(e){
    let reponse = await fetch(url);
    let user = await reponse.json();
    var tsk_count = Object.keys(user["tasks"]).length;

    let titre = prompt("Quel tache souhaitez vous supprimer?")
    for(let i=0;i<tsk_count;i++){
        if(user["tasks"][i]["title"] == titre ){
            var del_url = user["tasks"][i]["uri"]
        }
    }
    console.log(del_url)

    let res = await fetch(del_url, {
        method: "DELETE",
    })
    console.log(res)
    
    if(recup_task == 1){
        reponse = await fetch(url);
        user = await reponse.json();
        tsk_count = Object.keys(user["tasks"]).length;
        afficher_tasks(tsk_count, user["tasks"])
    }
});
