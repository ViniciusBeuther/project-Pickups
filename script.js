function verify() {
    var year = 2023;
    var yearProvided = Number(document.querySelector('#input-data').value);
    var divTxt = document.getElementById('model')
    var genderBox = document.getElementsByName('radsex')
    var imageDiv = document.getElementById('image-circle')
    var brand = ''
    var yearsOld = yearProvided

        //Conditional to set the car brand
       if (genderBox[0].checked)
       {
            brand = 'FORD'
       }
            else
            {
                    brand = 'CHEVROLET'
            }
        //Verify if is a valid year
       if (yearProvided < year) 
       {
        divTxt.textContent = `Your ${brand} pickup is of ${yearsOld}`
        }     
            else 
        {
            window.alert ("Invalid Year. Try again using a valid year!")
        }  

        //Check the car brand
    if (gender = 'CHEVROLET')
    {
        if (yearsOld < 1960)
        {
            imageDiv = imageDiv.style.backgroundImage = "url(image/chevrolet-1950_f.jpg)"
        }
        else if (yearsOld >= 1960 && yearsOld < 1970)
        {
            imageDiv = imageDiv.style.backgroundImage = "url(image/chevrolet-1960_f.jpg)"
        }
        else if (yearsOld >= 1970 && yearsOld < 1980)
        {
            imageDiv = imageDiv.style.backgroundImage = "url(image/chevrolet-1970_f.jpg)"
        }
        else if (yearsOld >= 1980 && yearsOld < 1990)
        {
            imageDiv = imageDiv.style.backgroundImage = "url(image/chevrolet-1980_f.jpg)"
        }
        else if (yearsOld >= 1990 && yearsOld < 2000)
        {
            imageDiv = imageDiv.style.backgroundImage = "url(image/chevrolet-1990_f.jpg)"
        }
        else if (yearsOld >= 2000 && yearsOld < 2010)
        {
            imageDiv = imageDiv.style.backgroundImage = "url(image/chevrolet-2000_f.jpg)"
        }
        else if (yearsOld >= 2010)
        {
            imageDiv = imageDiv.style.backgroundImage = "url(image/chevrolet-2010_f.jpg)"
        }
    }
        //FORD PICKUPS
        else
            if (yearsOld <= 10)
            {
                
            }
            else if (yearsOld > 10 && yearsOld < 20)
            {

            }
            else if (yearsOld > 20 && yearsOld < 40)
            {

            }
            else if (yearsOld > 40 && yearsOld < 80)
            {

            }
            else 
            {

            }
}
