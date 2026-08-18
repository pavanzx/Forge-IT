export type UserSession={email:string;name:string};
const KEY="forge-it-session";
export function getSession():UserSession|null{if(typeof window==="undefined") return null; try{return JSON.parse(localStorage.getItem(KEY)||"null")}catch{return null}}
export function setSession(session:UserSession){localStorage.setItem(KEY,JSON.stringify(session))}
export function clearSession(){localStorage.removeItem(KEY)}
export async function authenticate(email:string,password:string):Promise<UserSession>{if(!email.includes("@")) throw new Error("Enter a valid email address."); if(password.length<6) throw new Error("Password must be at least 6 characters."); return {email,name:email.split("@")[0]||"Builder"}}
