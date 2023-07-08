import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image'
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
        <div className = {styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1678109480836-a488dba67be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          fill={true}
          alt=""
          className={styles.img}
        />
            <div className={styles.imgText}>
              <h1 className={styles.imgTitle}>Digital Storytellers</h1>
              <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
            </div>
        </div>
        <div className={styles.textContainer}> 
            <div className={styles.item}>
                <h1 className={styles.title}>Who Are We</h1>
                <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                   quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                   suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                   eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                   beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                   <br />
                   <br />
                    voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                    esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                    officiis voluptatum quo ea eveniet?
                </p>
            </div>

            <div className={styles.item}>
                  <h1 className={styles.title}>What We Do?</h1>
                  <p className={styles.desc}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                      quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                      suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                      eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                      Creative Illustrations 
                      <br />
                      <br /> - Dynamic Websites 
                      <br />
                      <br /> - Fast and Handy  
                      <br />
                      <br /> - Mobile Apps
                  </p>
                  <Button url="/contact" text="Contact" />
            </div>
        </div>
    </div>
  )
}

export default About