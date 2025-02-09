import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Countries from "./Countries";
import Contact from "./Contact";
import Description from "./Desciption";
import Banner from "./Banner";
import Speciality from "./Speciality";

export function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <Header />
            <div id="hero"><Hero /></div>
            <div id="description"><Description /></div>
            <div id="banner"><Banner /></div>
            <div id="speciality"><Speciality /></div>
            <div id="countries"><Countries /></div>
            <div id="contact"><Contact /></div>
            <div id="about"><About /></div>
        </motion.div>
    );
}

export default Home;
