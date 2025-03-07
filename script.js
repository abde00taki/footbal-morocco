function validateForms() {
    let errorAlertNom = document.getElementById('error_nom');
    let errorAlertPrenom = document.getElementById('error_prenom');
    let errorAlertDate = document.getElementById('error_date');
    let errorAlertertrendivo=document.getElementById('error_rendivo');
    let errorAlertertPassword=document.getElementById('error_password');
    let errorAlertertbillets=document.getElementById('error_billets');
    let errorAlertertcompts=document.getElementById('error_compts');

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
    let date = document.forms['validationforms']['date'].value;
    if (date === "") {
        errorAlertDate.innerHTML = 'Entrez le date';
        errorAlertDate.classList.remove('d-none');
        return false;
    } else {
        errorAlertDate.classList.add('d-none');
    }
    let date_rendivo = document.forms['validationforms']['rendivo'].value;
    if (date_rendivo === "") {
        errorAlertertrendivo.innerHTML = 'Entrez le date';
        errorAlertertrendivo.classList.remove('d-none');
        return false;
    } else {
        errorAlertertrendivo.classList.add('d-none');
    }
    let password = document.forms['validationforms']['password'].value;
    if (password === "") {
        errorAlertertPassword.innerHTML = 'Entrez le date';
        errorAlertertPassword.classList.remove('d-none');
        return false;
    } else {
        errorAlertertPassword.classList.add('d-none');
    }
   

    
    

    // Si tous les champs sont remplis correctement, retourner true
    return true;
}


