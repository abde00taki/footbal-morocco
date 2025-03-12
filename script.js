function validateForms() {
    let errorAlertNom = document.getElementById('error_nom');
    let errorAlertPrenom = document.getElementById('error_prenom');   
    let errorAlertertPassword=document.getElementById('error_password');
    let errorAlertertemail=document.getElementById('error_email');
   

    let nom = document.forms['validationforms']['nom'].value;
    if (nom === "") {
        errorAlertNom.innerHTML = 'Entrez le nom';
        errorAlertNom.classList.remove('d-none');
        return false;
    } else {
        errorAlertNom.classList.add('d-none');
    }

    let prenom = document.forms['validationforms']['prenom'].value;
    if (prenom === "") {
        errorAlertPrenom.innerHTML = 'Entrez le prénom';
        errorAlertPrenom.classList.remove('d-none');
        return false;
    } else {
        errorAlertPrenom.classList.add('d-none');
    }
    
    
    let password = document.forms['validationforms']['password'].value;
    if (password === "") {
        errorAlertertPassword.innerHTML = 'Entrez le motpasse';
        errorAlertertPassword.classList.remove('d-none');
        return false;
    } else {
        errorAlertertPassword.classList.add('d-none');
    }
    let email = document.forms['validationforms']['email'].value;
    if (email === "") {
        errorAlertertemail.innerHTML = 'Entrez email';
        errorAlertertemail.classList.remove('d-none');
        return false;
    } else {
        errorAlertertemail.classList.add('d-none');
    }
   
    // Si tous les champs sont remplis correctement, retourner true
    return true;
}


