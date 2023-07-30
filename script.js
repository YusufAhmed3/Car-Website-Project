const vehicleImage = document.getElementById('vehicleImage');
const vehicleDescription = document.getElementById('vehicleDescription');
const sierraImage = document.getElementById('sierraImage');
const toyotaImage = document.getElementById('toyota-image');
const hornetImage = document.getElementById('hornetImage');
const teslaImage = document.getElementById('teslaImage');
const featuredVehicle = document.getElementById('featuredVehicle');

sierraImage.addEventListener("click", function() {
    if(vehicleImage.src.endsWith("/images/GMC-Sierra-3.png")) {
        vehicleImage.src = "/images/GMC-Sierra-3.png";
        vehicleDescription.innerHTML = "The boldest expression of towing capability and innovation";
        featuredVehicle.innerHTML = "2023 SIERRA HD DENALI";
    }
    else {
        vehicleImage.src = "/images/GMC-Sierra-3.png";
        vehicleDescription.innerHTML = "The boldest expression of towing capability and innovation";
        featuredVehicle.innerHTML = "2023 SIERRA HD DENALI";
    }
});

toyotaImage.addEventListener("click", function(){
    if(vehicleImage.src.endsWith("/images/GMC-Sierra-3.png")) {
        vehicleImage.src = "/images/Toyota-Sienna-2.png";
        vehicleDescription.innerHTML = "Get into the exclusively hybrid-electric 2023 Toyota Sienna, and get carried away.";
        featuredVehicle.innerHTML = "2023 TOYOTA SIENNA";
    }
    else {
        vehicleImage.src = "/images/Toyota-Sienna-2.png";
        vehicleDescription.innerHTML = "Get into the exclusively hybrid-electric 2023 Toyota Sienna, and get carried away.";
        featuredVehicle.innerHTML = "2023 TOYOTA SIENNA";
    }
});

hornetImage.addEventListener("click", function(){
    if(vehicleImage.src.endsWith("/images/GMC-Sierra-3.png")) {
        vehicleImage.src = "/images/Dodge-Hornet-2.png";
        vehicleDescription.innerHTML = "Bold, aggressive and capable, this all-new 2023 Dodge Hornet is ready for whatever. ";
        featuredVehicle.innerHTML = "2023 DODGE HORNET";
    }
    else {
        vehicleImage.src = "/images/Dodge-Hornet-2.png";
        vehicleDescription.innerHTML = "Bold, aggressive and capable, this all-new 2023 Dodge Hornet is ready for whatever. ";
        featuredVehicle.innerHTML = "2023 DODGE HORNET";
    }
});

teslaImage.addEventListener("click", function(){
    if(vehicleImage.src.endsWith("/images/GMC-Sierra-3.png")) {
        vehicleImage.src = "/images/Tesla-ModelS-3.png";
        vehicleDescription.innerHTML = " The Model S is built for speed and range, with beyond ludicrous acceleration, unparalleled performance and a refined design.";
        featuredVehicle.innerHTML = "2023 TESLA MODEL S";
    }
    else {
        vehicleImage.src = "/images/Tesla-ModelS-3.png";
        vehicleDescription.innerHTML = "Bold, aggressive and capable, this all-new 2023 Dodge Hornet is ready for whatever. ";
        featuredVehicle.innerHTML = "2023 TESLA MODEL S";
    }
});
