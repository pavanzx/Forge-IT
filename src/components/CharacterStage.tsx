"use client";
import { motion } from "framer-motion";
import { characters, type CharacterKey } from "@/src/lib/characters";
export function CharacterStage({character,bubble,compact=false,interactive=true}:{character:CharacterKey;bubble?:string;compact?:boolean;interactive?:boolean}){
  const c=characters[character];
  return <motion.div className={`character-stage ${character} ${compact?"compact":""}`} whileHover={interactive?{y:-4}:{}}>
    <motion.div className="character-art-image" initial={{opacity:0,y:22,scale:.94,rotate:-2}} animate={{opacity:1,y:0,scale:1,rotate:0}} transition={{duration:.5,type:"spring",stiffness:180}} key={character}>
      <img src={`/assets/characters/${character}.svg`} alt={`${c.name} companion`} />
    </motion.div>
    <motion.div className="character-meta" key={`meta-${character}`} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:.12}}><b>{c.name}</b><span>{c.role}</span></motion.div>
    {bubble&&<motion.div className="character-bubble" initial={{opacity:0,scale:.9,x:8}} animate={{opacity:1,scale:1,x:0}} transition={{delay:.18}}>{bubble}</motion.div>}
  </motion.div>
}
