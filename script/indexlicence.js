var keyX=0;

class ConfigLicenca {
    //Create licence key for entry Taresk//
    licence(key) {
        let licenceAvaliables = ["FELIPEKATAO", "DELGADO"];
        if (licenceAvaliables.indexOf(key) > -1) {
            window.location.replace("TareskApp/Taresk.html");
        } else {
            alert("Sua chave de licen�a n�o � valida, confira se esta digitada corretamente. Ou procure o suporte tecnico");
        }
    }
    readlicence() {

    }
    GetLicense()
    {
        this.keyX = document.getElementById("campotxt").value;
        console.log(this.keyX);
    }
}