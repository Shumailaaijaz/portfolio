import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data =[
    {
        id:0,
        title:"Todo List",
        description:"A React and typescript base app for managing and organizing your task efficiently",
        img:"/todoApp.png",
        tags:["React" ,"Node", "CSS", "Typescript"],
    
    },
    {
        id: 1,
        title:"Word Counter",
        description:"The Word Counter is a TypeScript app that provides an interactive tool for counting the number of words in a given text.",
        img:"/wordcounter.png",
        tags:["Node", "Typescript"],
    
    },
    {
        id: 2,
        title:"Currency Converter",
        description:"A Typescript powered tool for converting currencies with real-time rates. Helping with easey to use interface every one like it.",
        img:"/currencyconverter.png",
        tags:["HTML", "CSS", "Typescript"],
    
    },
    {
        id: 3,
        title:"Bank Account APP",
        description:"A Typescript powered project to save, withdraw and check balance an interactive feature.",
        img:"/bankacApp.png",
        tags:["Node", "Typescript"],
    
    },
    {
        id: 4,
        title:"Quiz APP",
        description:"A Typescript powered project to  prepare students for examination with an interactive feature.",
        img:"/appquiz.png",
        tags:["Node", "Typescript"],
    
    },
    {
        id: 5,
        title:"Simple Calculator",
        description:"A Typescript powered project for simple addition, substration, multiplication and division.",
        img:"/calculator.png",
        tags:["Node", "Typescript"],
    
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title={'My Projects'} />
        <div className='grid gap-10 xl:gap-2 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.description}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Projects
