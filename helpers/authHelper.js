import bcrypt from "bcrypt";

export const hashYourPassword=async(password)=>{
    try {
        const saltRounds=10;
        const hashedPasssword= await bcrypt.hash(password,saltRounds);
        return hashedPasssword;
    } catch (error) {
        console.log(error)
    }
}

export const comparePassword=async(password,hashedPasssword)=>{
    try {
        const isMatch=await bcrypt.compare(password,hashedPasssword);
        return isMatch;
    } catch (error) {
        console.log(error)
    }
}