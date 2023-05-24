const validations = (form, allPokemons)=>{
    let errors = {}; 

    let nameRegex = /^[a-zA-Z\s]*$/
    let numberRegex = /^[0-9]{1,3}$/

    if(!form.name || !nameRegex.test(form.name)){
        errors.name = "Name is required and numbers or special characters are not allowed"
    } else if(form.hp < 1 || form.hp > 255){
        errors.hp = "Pokemon life must be higher than 1 and less than 255"
    } else if(!numberRegex.test(form.hp)){
        errors.hp = "HP stat must be a number"
    } else if(form.attack < 1 || form.attack > 200){
        errors.attack = "Pokemon attack must be higher than 1 and less than 200"
    } else if(!numberRegex.test(form.attack)){
        errors.attack = "Attack stat must be a number"
    } else if(form.defense < 1 || form.defense > 250){
        errors.defense = "Pokemon defense must be higher than 1 and less than 250"
    } else if(!numberRegex.test(form.defense)){
        errors.defense = "Defense stat must be a number"
    } else if(form.speed < 1 || form.speed > 200){
        errors.speed = "Pokemon speed must be higher than 1 and less than 200"
    } else if(!numberRegex.test(form.speed)){
        errors.speed = "Speed stat must be a number"
    } else if(form.weight < 1 || form.weight > 9999){
        errors.weight = "Pokemon weight must be higher than 1 and less than 9999 gr" 
    } else if(!numberRegex.test(form.weight)){
        errors.weight = "weight must be a number"
    } else if(form.height < 1 || form.height > 200){
        errors.height = 'Pokemon height must be higher than 1 and less than 200'
    } else if(!numberRegex.test(form.height)){
        errors.height = "Height must be a number"
    } else if(!form.types){
        errors.types = 'Must choose a pokemon type'
    }
    
    return errors;
}

export default validations;