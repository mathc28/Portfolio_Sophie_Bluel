const token = localStorage.getItem("token");
const logoutBtn = document.querySelector(".logout_btn");
const loginBtn = document.querySelector(".login_btn");
const banner = document.getElementById("insert_banner");
const btnModifier = document.querySelector(".modification");
const gallerie = document.querySelector(".gallery");

/**
 * on créer le mode Admin avec la bannière, le bouton modifier et logout
 */

/**
 * on créer la bannière
 */
const createBanner = () => {
  const banners = document.createElement("div");
  banners.classList.add("banner");
  banners.setAttribute("id", "editor_mode");
  banners.innerHTML = `
        <button class="banner-btn">
            <p class="banner-content"> 
	        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
		        <path d="M14.0229 2.18576L14.3939 2.55679C14.6821 2.84503 14.6821 3.31113 14.3939 3.5963L13.5016 4.49169L12.0879 3.07808L12.9803 2.18576C13.2685 1.89751 13.7346 1.89751 14.0198 2.18576H14.0229ZM6.93332 8.23578L11.0484 4.11759L12.4621 5.53121L8.34387 9.64633C8.25494 9.73525 8.14455 9.79964 8.02496 9.83337L6.23111 10.3455L6.7432 8.55162C6.77693 8.43203 6.84133 8.32164 6.93025 8.23271L6.93332 8.23578ZM11.9408 1.14625L5.89074 7.1932C5.62397 7.45998 5.43078 7.78808 5.32959 8.14685L4.4526 11.2133C4.379 11.4708 4.44953 11.7468 4.63965 11.9369C4.82977 12.127 5.10574 12.1976 5.36332 12.124L8.42973 11.247C8.79156 11.1427 9.11967 10.9495 9.38338 10.6858L15.4334 4.63888C16.2951 3.77722 16.2951 2.37894 15.4334 1.51728L15.0624 1.14625C14.2007 0.284585 12.8024 0.284585 11.9408 1.14625ZM3.19844 2.34214C1.70816 2.34214 0.5 3.55031 0.5 5.04058V13.3812C0.5 14.8715 1.70816 16.0796 3.19844 16.0796H11.5391C13.0293 16.0796 14.2375 14.8715 14.2375 13.3812V9.94683C14.2375 9.539 13.9094 9.21089 13.5016 9.21089C13.0937 9.21089 12.7656 9.539 12.7656 9.94683V13.3812C12.7656 14.0589 12.2167 14.6078 11.5391 14.6078H3.19844C2.52076 14.6078 1.97188 14.0589 1.97188 13.3812V5.04058C1.97188 4.36291 2.52076 3.81402 3.19844 3.81402H6.63281C7.04065 3.81402 7.36875 3.48591 7.36875 3.07808C7.36875 2.67025 7.04065 2.34214 6.63281 2.34214H3.19844Z" fill="white"/>
	        </svg>
            Mode édition</p>
        </button>
    `;
  banner.appendChild(banners);
};

/**
 * on créer la bouton modifier au dessus des travaux
 */
const createBtnModifier = () => {
  const btnModify = document.createElement("div");
  btnModify.classList.add("editlogo");
  btnModify.innerHTML = `
    <button class="modif modifmodal">    
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>svg{fill:#000000}</style><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>    
        modifier
    </button>
    `;
  btnModifier.appendChild(btnModify);
};

/**
 * on créer le bouton logout
 */
const createBtnLogOut = () => {
  const btnLogOut = document.createElement("div");
  btnLogOut.innerHTML = `
        <a href="./index.html">logout</a>
    `;
  logoutBtn.appendChild(btnLogOut);
};

/**
 * On ajoute les boutons ainsi que la bannière au DOM
 */
if (token != null || undefined) {
  createBanner();
  createBtnModifier();
  createBtnLogOut();
  loginBtn.style.display = "none";
}

const bannerBtnEditor = document.querySelector(".banner-btn");
const btnEditor = document.querySelector(".modif");

/**
 * On ajoute un event listener sur le bouton logOut
 */
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("token");
});


/**
 * on créer la 2ème modale, les catégories du formulaires, la prévisualisation de l'image, le fetch POST et un event listener pour envoyer le nouveau projet dans l'API
 */


/**
 * création de la deuxième modal pour l'ajout de projet
 */
const createModalAjoutPhoto = () => {
  const newModal = document.createElement("div");
  newModal.classList.add("modal");
  newModal.innerHTML = `
    <div class="modal-container">	
	    <div class="modal-header">
            <div class="nav-modal">   
                <button id="backtomodal" class="arrow-back-modal">
                    <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 0 448 512"><style>svg{fill:#000000}</style><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
		        </button>
                <button id="btn-new-modal-close" class="btn-close-modal"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.6546 8.05106C18.1235 7.58214 18.1235 6.82061 17.6546 6.35169C17.1856 5.88277 16.4241 5.88277 15.9552 6.35169L12.005 10.3056L8.05106 6.35544C7.58214 5.88652 6.82061 5.88652 6.35169 6.35544C5.88277 6.82436 5.88277 7.58589 6.35169 8.05481L10.3056 12.005L6.35544 15.9589C5.88652 16.4279 5.88652 17.1894 6.35544 17.6583C6.82436 18.1272 7.58589 18.1272 8.05481 17.6583L12.005 13.7044L15.9589 17.6546C16.4279 18.1235 17.1894 18.1235 17.6583 17.6546C18.1272 17.1856 18.1272 16.4241 17.6583 15.9552L13.7044 12.005L17.6546 8.05106Z" fill="black"/>
                    </svg>
                </button>
            </div>    
            <h3 class="title-new-modal"> Ajout photo </h3>
	    </div>
	    <div class="modal-content">
            <div class="addphoto_section">
                <form id="addphoto_form">
                    <div class="drop_photo">
                        <div id="photoadd" class="imageaddphoto">
                          <img id="previewImage" alt="preview" style="max-width: 129px; max-height: 180px;">
                        </div>
                        <i class="fa fa-thin fa-image faAddImgSquare" aria-hidden="true"></i>
                        <label class="add_photo_label" id="btnaddphoto"><p>+ Ajouter Photo</p>
                            <input type="file" accept="image/png, image/jpeg" name="image" id="addphotoinput" required="">
                        </label>
                        <p class="photo_info" id="photo_info" > jpg, png: 4mo max</p>
                    </div>

                    <label class="addphoto_label">Titre</label>
                    <input type="text" name="title" id="title_photo" required=""/>

                    <label class="addphoto_label">Catégorie</label>
                    <select name="categorie" id="categorieselect" required=""/>
                        <option value="0">choisissez une catégorie</option>
                    </select>
                    <hr class="line" />
                    <input type="submit" value="Valider" class="validatephoto" id="validatephoto"/>
                    <p id="add_photo_error"></p>
                </form>
            </div>
        </div>
	</div>
    `;

  document.body.appendChild(newModal);

  /**
   * Ajout des catégories au formulaire
   */

  /**
   * On créer une catégorie du formulaire
   */
  function displayOneSelectCategory(categories) {
    const categoryForm = document.getElementById("categorieselect");
    const newOption = document.createElement("option");
    newOption.innerText = categories.name;
    newOption.value = categories.id;

    categoryForm.appendChild(newOption);
  }

  /**
   * On créer toutes les catégories du formulaire
   */
  function displayAllSelectCategories(categories) {
    for (let i = 0; i < categories.length; i++) {
      displayOneSelectCategory(categories[i]);
    }
  }

  /**
   * On ajoute les catégories du formulaire
   */
  async function addCategoriesSelectForm() {
    const categories = await fetch("http://localhost:5678/api/categories").then(
      (response) => response.json()
    );
    displayAllSelectCategories(categories);
  }

  addCategoriesSelectForm(categories);

  /**
   * Fermer la deuxième modale
   */
  const newBtnModalClose = document.getElementById("btn-new-modal-close");

  newBtnModalClose.addEventListener("click", function () {
    newModal.remove();
  });

  /**
   * Revenir de la deuxième modale à la première
   */
  const backToModal = document.getElementById("backtomodal");

  backToModal.addEventListener("click", function () {
    newModal.remove();
    createModalGalerie();
  });

  /**
   * Permet de fermer la modale en cliquant à coté de la modale
   */
  window.onclick = function (event) {
    if (event.target.contains(newModal)) {
      newModal.remove();
    }
  };

  /**
   * On ajoute la fonction de prévisualisation de l'image
   */

  const imageInput = document.getElementById("addphotoinput");
  const previewImage = document.getElementById("previewImage");
  const formImgSquare = document.querySelector(".faAddImgSquare");
  const btnAddPhoto = document.getElementById("btnaddphoto");
  const infoPhoto = document.getElementById("photo_info");
  const imgPreview = document.querySelector(".imageaddphoto");

  function previewSelectedImage() {
    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        previewImage.src = e.target.result;
      };
      formImgSquare.style.visibility = "hidden";
      btnAddPhoto.style.visibility = "hidden";
      infoPhoto.style.visibility = "hidden";
      imgPreview.style.display = "flex";
    }
  }

  imageInput.addEventListener("change", previewSelectedImage);

  /**
   * On envoi le nouveau projet via un fetch
   */

  const titlePhoto = document.getElementById("title_photo");
  const categoriePhoto = document.getElementById("categorieselect");

  async function addPhotoToApi() {
    console.log(titlePhoto.value);
    console.log(categoriePhoto.value);

    var data = new FormData();
    data.append("image", imageInput.files[0]);
    data.append("title", titlePhoto.value);
    data.append("category", categoriePhoto.value);

    return await fetch(baseUrl + "/works", {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    })
      .then((response) => {
        if (response.status === 400) {
          throw new Error("Bad Request");
          document.getElementById("add_photo_error").textContent =
            "Merci de remplir tous les champs pour l'ajout du projet";
        }
        if (response.status === 401) {
          throw new Error("Unauthorized");
          document.getElementById("add_photo_error").textContent =
            "vous n'avez pas les droits pour ajouter un projet";
        }
        if (response.status === 500) {
          throw new Error("Unexpected Error");
          document.getElementById("add_photo_error").textContent =
            "Erreur serveur";
        }
        if (response.status === 201) {
          document.getElementById("add_photo_error").textContent =
            "Projet ajouté avec succès";
        }
      })
      .catch((error) => {});
  }

  const validatephoto = document.getElementById("validatephoto");
  validatephoto.addEventListener("click", () => {});
  const form = document.querySelector("#addphoto_form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    addPhotoToApi();
  });
};

/**
 * On créer une fonction de pour supprimer un projet de la première modale avec un fetch DELETE
 */
async function deleteProject(work) {
  return await fetch(baseUrl + `/works/${work.id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 500) {
        throw new Error("Unexpected Behaviour");
      }
      if (response.status === 401) {
        throw new Error("Unauthorized");
      }
    })
    .then((response) => {
      // suppression dans la modal
      const workToDeleteModal = document.querySelector(
        `.modal .figure_size[data-id="${work.id}"]`
      );
      workToDeleteModal.remove();

      // suppression dans le portfolio
      const workToDelete = document.querySelector(
        `#gallery figure[data-id="${work.id}"]`
      );
      workToDelete.remove();
    })
    .catch((error) => {
      console.error(error);
      document.getElementById("delete_photo_error").textContent =
        "Erreur serveur lors de la suppression du fichier";
    });
}
/**
 * on créer la 1ème modale, ouverture/fermeture des 2 modales, ajout de la galerie avec ajout de la poubelle
 */
/**
 * création de la premiere modal avec la galerie de projets
 */
const createModalGalerie = () => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-container">	
	    <div class="modal-header" >
		    <button id="btn-modal-close" class="btn-close-modal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.6546 8.05106C18.1235 7.58214 18.1235 6.82061 17.6546 6.35169C17.1856 5.88277 16.4241 5.88277 15.9552 6.35169L12.005 10.3056L8.05106 6.35544C7.58214 5.88652 6.82061 5.88652 6.35169 6.35544C5.88277 6.82436 5.88277 7.58589 6.35169 8.05481L10.3056 12.005L6.35544 15.9589C5.88652 16.4279 5.88652 17.1894 6.35544 17.6583C6.82436 18.1272 7.58589 18.1272 8.05481 17.6583L12.005 13.7044L15.9589 17.6546C16.4279 18.1235 17.1894 18.1235 17.6583 17.6546C18.1272 17.1856 18.1272 16.4241 17.6583 15.9552L13.7044 12.005L17.6546 8.05106Z" fill="black"/>
                </svg>
            </button>
            <h3 class="title-modal"> galerie photo </h3>
	    </div>
	    <div class="modal-content">
            <div class="projects"></div>
            <button id="addphoto" class="addphoto"> Ajouter une photo </button>
            <p class="delete_photo_error"></p>
        </div>
	</div>
    `;
  document.body.appendChild(modal);

  const btnModalClose = document.getElementById("btn-modal-close");
  const addphoto = document.getElementById("addphoto");

  /**
   * on ferme la premiere modale et on ouvre la seconde
   */
  addphoto.addEventListener("click", function () {
    createModalAjoutPhoto();
    modal.remove();
  });
  /**
   * Fermer la deuxième modale
   */
  btnModalClose.addEventListener("click", function () {
    modal.remove();
  });

  /**
   * Permet de fermer la modale en cliquant à coté de la modale
   */
  window.onclick = function (event) {
    if (event.target.contains(modal)) {
      modal.remove();
    }
  };

  //ajout de la galerie dans la modale

  const modalBody = document.querySelector(".projects");
  const baseUrl = "http://localhost:5678/api";

  async function recoverWorks() {
    return await fetch(baseUrl + "/works").then((response) => response.json());
  }

  function displayOneProject(work) {
    const newProject = document.createElement("figure");
    newProject.classList.add("figure_size");
    newProject.setAttribute("data-id", work.id);
    newProject.innerHTML = `
            <img src="${work.imageUrl}" alt="${work.title}" class="project"/>
            <button class="black-trash" id="trash_${work.id}">
                <i class="fa-solid fa-trash-can fa-xs" style="color: #ffffff;"></i>   
            </button>       
            `;
    modalBody.appendChild(newProject);

    const trash = document.getElementById(`trash_${work.id}`);

    trash.addEventListener("click", () => {
      deleteProject(work);
    });
  }

  function displayAllProjects(work) {
    for (let i = 0; i < work.length; i++) {
      displayOneProject(work[i]);
    }
  }

  async function init() {
    // Attends de recuperer les data de l'api
    const works = await recoverWorks();
    // Demande l'affichage des datas par projets
    displayAllProjects(works);
  }

  init();
};

/**
 * On ajoute un event listener sur le bouton "modifier" qui ouvre la première modale
 */
btnEditor.addEventListener("click", function () {
  createModalGalerie();
});

/**
 * On ajoute un event listener sur le bouton "mode édition" qui ouvre la première modale
 */
bannerBtnEditor.addEventListener("click", function () {
  createModalGalerie();
});
