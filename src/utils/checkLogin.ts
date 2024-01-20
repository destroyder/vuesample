import redirectLogout from "@/utils/redirectLogout";

export default async function checkLogin() {
    const bearer:string|null = localStorage.getItem('bearer');
    if(!bearer){
        redirectLogout();
    }
}