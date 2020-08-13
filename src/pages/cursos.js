import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/Seo'
import Course from '../components/Course'
import * as S from '../components/ListWrapper'

const coursesList = [
  {
    title: 'Mini-curso de Netlify no Youtube',
    image: 'netlify.png',
    link:
      'https://www.youtube.com/watch?v=a1cIjP1bueM&list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth',
    description:
      'Aprenda a botar seus projetos no ar de forma fácil e gratuita!'
  }
]

const CursosPage = () => (
  <Layout>
    <SEO
      title="Cursos"
      description="Aprenda as mais diversas tecnologias em cursos separados em pequenos e completos módulos."
      image="https://muniz95.com.br/assets/img/cursos/cursos-bg.png"
    />
    <S.ListWrapper>
      {coursesList.map(({ title, description, link, image }, i) => (
        <Course
          key={i}
          title={title}
          description={description}
          link={link}
          image={image}
        />
      ))}
    </S.ListWrapper>
  </Layout>
)

export default CursosPage
