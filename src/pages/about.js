import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/Seo'
import SocialLinks from '../components/SocialLinks'

import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>

      <h2>Habilidades</h2>

      <ul>
        <li>Design Responsivo (Mobile First)</li>
        <li>(Java|Type)script</li>
        <li>ReactJS / Redux / MobX</li>
        <li>NodeJS / .NET / Dart</li>
        <li>Flutter</li>
        <li>Automatizadores (Grunt, Gulp, Webpack, Parcel)</li>
        <li>Git</li>
        <li>Ruby / Rails</li>
        <li>MySQL - MongoDB</li>
        <li>Scrum and Kanban</li>
        <li>O que eu não sei, aprendo rápido =)</li>
      </ul>

      <h2>Contatos</h2>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
