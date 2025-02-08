import { ADOPTED, ADOPTION, FEMALE, FOSTER, FOUND, LARGE, LOST, MALE, MEDIUM, SMALL } from "../constants/types/dogs";

export const getGenderFormatted = (gender: string) => {
  const genderLowerCase = gender.toLowerCase();
  if (genderLowerCase === MALE) {
    return 'Macho';
  } 
  if (genderLowerCase === FEMALE) {
    return 'Hembra';
  }
  return null;
}

export const getSizeFormatted = (size: string) => {
  const sizeLowerCase = size.toLowerCase();
  if (sizeLowerCase === SMALL) {
    return 'Pequeño';
  } 
  if (sizeLowerCase === MEDIUM) {
    return 'Mediano';
  }
  if (sizeLowerCase === LARGE) {
    return 'Grande';
  }
  return null;
}

export const getStateFormatted = (state: string) => {
  const stateLowerCase = state.toLowerCase();
  if (stateLowerCase === ADOPTION) {
    return 'En adopción';
  } 
  if (stateLowerCase === ADOPTED) {
    return 'Adoptado';
  }
  if (stateLowerCase === FOSTER) {
    return 'En acogida';
  }
  if (stateLowerCase === LOST) {
    return 'Perdido';
  }
  if (stateLowerCase === FOUND) {
    return 'Encontrado';
  }
  return null;
}

export const getPedigreeFormatted = (pedigree: string) => {
  const stateLowerCase = pedigree.toLowerCase();
  if (stateLowerCase === 'undefined') {
    return 'No definido';
  } 
  return pedigree;
}

export const getAgeFormatted = (birthDate: string) => {
  const date = new Date(birthDate);
  const today = new Date();
  
  let years = today.getFullYear() - date.getFullYear();
  let months = today.getMonth() - date.getMonth();
  
  if (months < 0 || (months === 0 && today.getDate() < date.getDate())) {
    years--;
    months += 12;
  }
  
  const totalDays = (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
  const totalMonths = totalDays / 30.44;
  
  months = Math.floor(totalMonths % 12);

  if (years > 1) return `${years} años`;
  if (years === 1) return `${years} año`;
  if (months > 1) return `${months} meses`;
  if (months === 1) return `${months} mes`;
  if (months < 1) return 'menos de 1 mes';
  
  return null;
}