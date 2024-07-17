const gallery = document.querySelector("#gallery"); // => retourne un noeud HTML
const categoryDOM = document.querySelector("#categories");

const baseUrl = "http://localhost:5678/api";

/**
 * on se connecte à l'API et on extrait les travaux
 */
async function recoverWorks() {
  return await fetch(baseUrl + "/works").then((response) => response.json());
}

/**
 * on se connecte à l'API et on extrait les categories
 */
async function recoverCategories() {
  return await fetch(baseUrl + "/categories").then((response) =>
    response.json()
  );
}

/**
 * Create a new project and display it
 */
function displayOneProject(work) {
  const newProject = document.createElement("figure");
  newProject.setAttribute("data-id", work.id);
  newProject.innerHTML = `
      <img src="${work.imageUrl}" alt="${work.title}" />
      <figcaption>${work.title}</figcaption> 
  `;
  gallery.appendChild(newProject);
}

/**
 * We will display all the projects using the previous function
 */
function displayAllProjects(work) {
  // On réinitialise la gallery
  gallery.innerHTML = "";

  // On affiche les projets
  for (let i = 0; i < work.length; i++) {
    displayOneProject(work[i]);
  }
}

/* Create a new category button and display them */
function displayOneCategory(categories) {
  const newCategory = document.createElement("button");
  newCategory.classList.add("btnCategory"),
    (newCategory.innerText = categories.name);

  categoryDOM.appendChild(newCategory);

  // event listerner sur chaque btn
  newCategory.addEventListener("click", async function () {
    // recoverWorks => récupère tous les travaux
    const works = await recoverWorks();

    // function XXXX qui prends en paramètres les travaux de recoverWorks + l'id de la catégory  => elle te retourne un tableau des travaux de la bonne catégory

    const newWorks = [];
    for (let i = 0; i < works.length; i++) {
      if (works[i].categoryId === categories.id) {
        newWorks.push(works[i]);
      }
    }

    displayAllProjects(newWorks);
  });
}

/* We will display all the categories button using the previous function */
function displayAllCategories(categories) {
  for (let i = 0; i < categories.length; i++) {
    displayOneCategory(categories[i]);
  }
}

/* Create the category button = "tous" and display it */
function displayCategoryBtnAll() {
  const btnCategoryAll = document.createElement("button");
  btnCategoryAll.innerHTML = "Tous";
  btnCategoryAll.classList.add("btnCategory"),
    categoryDOM.prepend(btnCategoryAll);

  btnCategoryAll.addEventListener("click", async function () {
    const works = await recoverWorks();
    displayAllProjects(works);
  });
}

/**
 *
 */
async function init() {
  // Attends de recuperer les data de l'api
  const works = await recoverWorks();
  // Demande l'affichage des datas par projets
  displayAllProjects(works);

  // Attends de recuperer les catégories de l'api
  const categories = await recoverCategories();
  // Demande l'affichage des catégories
  displayAllCategories(categories);

  displayCategoryBtnAll();
}

init();
