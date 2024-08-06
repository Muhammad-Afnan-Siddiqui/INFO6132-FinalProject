import { emailRegex, nameRegex, numberOnlyRegex ,onlyLetterRegex,floatNumberRegex,urlRegex} from "../theme/regex"
export function nameValidation(value) {
  if (nameRegex.test(value) === false) {
    return false;
  }
  else {
    return true
  }
}

export function emailValidation(value) {
  if (emailRegex.test(value) === false) {
    return false;
  }
  else {
    return true
  }
}

export function descriptionValidation(value) {
  if (emailRegex.test(value) === false) {
    return false;
  }
  else {
    return true
  }
}
export function floaNumberValidation(value) {
  if (floatNumberRegex.test(value) === false) {
    return false;
  }
  else {
    return true
  }
}

export function onlyLetterValidation(value) {
  if (onlyLetterRegex.test(value) === false) {
    return false;
  }
  else {
    return true
  }
}

export function onlyNumberValidation(value){
  if(numberOnlyRegex.test(value) === false) {
    return false;
  }else{
    return true;
  }
}

export function urlValidation(value){
  if(urlRegex.test(value) === false) {
    return false;
  }else{
    return true;
  }
}

export function minimumCharacterValidation(value){
  if(value?.length<3) {
    return false;
  }else{
    return true;
  }
}
