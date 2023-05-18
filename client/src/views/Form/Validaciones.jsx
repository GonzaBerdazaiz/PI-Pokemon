const validations = (form, allPokemons)=>{
    let errors = {}; 

    if(!form.name){
        errors.name = "Name is required"
    } else if(allPokemons.indexOf(form.name) !== -1){
        errors.name = "That pokemon already exist"
    } else if(!/^[a-zA-Z\s]*$/.test(form.name)){
        errors.name = 'Numbers or special characters are not allowed'
    } else if(form.hp < 1 || form.hp > 255){
        errors.hp = "Pokemon life must be higher than 1 and less than 255"
    } else if(!/^[0-9]{1,3}$/.test(form.hp)){
        errors.hp = "Must be a number"
    } else if(form.attack < 1 || form.attack > 200){
        errors.attack = "Pokemon attack must be higher than 1 and less than 200"
    } else if(!/^[0-9]{1,3}$/.test(form.attack)){
        errors.attack = "Must be a number"
    } else if(form.defense < 1 || form.defense > 250){
        errors.defense = "Pokemon defense must be higher than 1 and less than 250"
    } else if(!/^[0-9]{1,3}$/.test(form.defense)){
        errors.defense = "Must be a number"
    } else if(form.speed < 1 || form.speed > 200){
        errors.speed = "Pokemon speed must be higher than 1 and less than 200"
    } else if(!/^[0-9]{1,3}$/.test(form.speed)){
        errors.speed = "Must be a number"
    } else if(form.weight < 1 || form.weight > 9999){
        errors.weight = "Pokemon weight must be higher than 1 and less than 9999 gr" 
    } else if(!/^[0-9]{1,3}$/.test(form.weight)){
        errors.weight = "Must be a number"
    } else if(form.height < 1 || form.height > 200){
        errors.height = 'Pokemon height must be higher than 1 and less than 200'
    } else if(!/^[0-9]{1,3}$/.test(form.height)){
        errors.height = "Must be a number"
    } else if(!form.types.length){
        errors.types = 'Must choose a pokemon type'
    } else if(form.types.length > 2){
        errors.types = `You can choose only 2 types per Pokemon`
    }
    
    return errors;
}

export default validations;

// if(form.hp < 1 || form.hp > 255){
//     // if(form.hp < 1 ){
//     //     errors.hp = 'Pokemon life must be higher than 1'
//     // }
//     // if(form.hp > 255){
//     //     errors.hp = 'Pokemon life must be less than 255'
//     // } 
// }
// if(form.attack < 1 || form.attack > 200){
//     // if(form.attack < 1 ){
//     //     errors.attack = 'Pokemon attack must be higher than 1'
//     // }
//     // if(form.attack > 200){
//     //     errors.attack = 'Pokemon attack must be less than 200'
//     // } 
// }
// if(form.defense < 1 || form.defense > 250){
//     // if(form.defense < 1 ){
//     //     errors.defense = 'Pokemon defense must be higher than 1'
//     // }
//     // if(form.defense > 250){
//     //     errors.defense = 'Pokemon defense must be less than 250'
//     // } 
// }
// if(form.speed < 1 || form.speed > 200){
//     // if(form.speed < 1 ){
//     //     errors.speed = 'Pokemon speed must be higher than 1'
//     // }
//     // if(form.speed > 200){
//     //     errors.speed = 'Pokemon speed must be less than 200'
//     // } 
// }
// if(form.weight < 1 || form.weight > 9999){
//     // if(form.weight < 1 ){
//     //     errors.weight = 'Pokemon weight must be higher than 1 gr'
//     // }
//     // if(form.weight > 9999){
//     //     errors.weight = 'Pokemon weight must be less than 9999 gr'
//     // } 
// }
// if(form.height < 1 || form.height > 200){
//     // if(form.height < 1 ){
//     //     errors.height = 'Pokemon height must be higher than 1'
//     // }
//     // if(form.height > 200){
//     //     errors.height = 'Pokemon height must be less than 200'
//     // } 
// }