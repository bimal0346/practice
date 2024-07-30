'use client'
import Image from "next/image";
import styles from "./page.module.css";

export  default function Home() {
  const [name,setName]=useState("Anil")
  const apple=()=>{
   reactState='Hello'
  }
  return (
    <main className={styles.main}>
     <h1>Event ,function and state {name}</h1>
    <button onClick={()=>apple("Hello fucking ")}>Click Me</button>
    </main>
  )
}
