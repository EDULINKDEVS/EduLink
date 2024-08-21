type pupilDataPackage = {
    schoolName:string;
    schoolCity:string;
    schoolProfile:string;
    schoolLevel: "voc" | "tech" | "high";
    degreeLabel: "DURING" | "GRADUATE"
  }
  function isValidEmail(email:string) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
function isValidName(name:string) {
    const namePattern = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(?:[-\s][A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)*$/;

    return namePattern.test(name);
}
function isValidPhoneNumber(phoneNumber: string) {
    const cleanedNumber = phoneNumber.replace(/[\s-]/g, '');

    const phonePattern = /^(?:\+?48)?(?:[1-9]\d{8}|[1-9]\d{2}[1-9]\d{5})$/;

    return phonePattern.test(cleanedNumber);
}
  export enum degreeEnum {
    BACHELOR = "BACHELOR",
    ENGINEER = "ENGINEER",
    MASTER = "MASTER",
    DOCTOR = "DOCTOR"
  }
  type studentDataPackage = {
      schoolName:string;
      schoolCity:string;
      schoolProfile:string;
      schoolLabel: 'DURING' | 'GRADUATE';
      schoolDegree: degreeEnum;
  }

const isValidStatus = (status:string) => {
    if((status === 'school') || (status === 'study')){
        return true;
    }
    else{
        return false;
    }
}

function isValidBirthdate(birthDate: Date) {
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    const dayDifference = currentDate.getDate() - birthDate.getDate();
    
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age >= 13;
}


    const checkPupilPack = (pupilPack: pupilDataPackage) => {
        if(pupilPack.schoolName.length < 1){
            return false;
        }
        else if(pupilPack.schoolCity.length < 1){
            return false;
        }
        else if(pupilPack.schoolProfile.length < 1){
            return false;
        }

        else if(!(pupilPack.schoolLevel === 'voc' || pupilPack.schoolLevel === 'tech' || pupilPack.schoolLevel === 'high')){
            return false;
        }
        else if(!(pupilPack.degreeLabel === 'DURING' || pupilPack.degreeLabel === 'GRADUATE')){
            return false;
        }
        else{
            return true;
        }
    }
    const checkStudentPack = (studentPack: studentDataPackage) => {
        if(studentPack.schoolName.length < 1){
            return false;
        }
        else if(studentPack.schoolCity.length < 1){
            return false;
        }
        else if(studentPack.schoolProfile.length < 1){
            return false;
        }
        else if(!(studentPack.schoolLabel === 'DURING' || studentPack.schoolLabel === 'GRADUATE')){
            return false;
        }    
        else if(!(studentPack.schoolDegree === degreeEnum.BACHELOR || studentPack.schoolDegree === degreeEnum.DOCTOR || studentPack.schoolDegree === degreeEnum.ENGINEER || studentPack.schoolDegree === degreeEnum.MASTER)){
            return false;
        }
        else{
            return true;
        }
    }
    export const checkRegisterData = ( email:string, phone:string, f_name:string, l_name:string, pass:string, status: string, dateOfBirth: Date, pupilPack: pupilDataPackage |null, studentPack: studentDataPackage | null) => {
        if(!isValidEmail(email)){
            return false;
        }
        else if(!isValidPhoneNumber(phone)){
            return false;
        }
        else if(!isValidName(f_name)){
            return false;
        }
        else if(!isValidName(l_name)){
            return false;
        }
        else if(pass.length < 6){
            return false;
        }
        else if(!isValidStatus(status)){
            return false;
        }
        else if(!isValidBirthdate(dateOfBirth)){
            return false;
        }
        else if(!(pupilPack || studentPack)){
            return false;
        }
        else if(status === 'school'){
            
            if(pupilPack && checkPupilPack(pupilPack)){
                return true;
            }else{
                return false;
            }
           
        }
        else if(status === 'study'){
            if(studentPack && checkStudentPack(studentPack)){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }





