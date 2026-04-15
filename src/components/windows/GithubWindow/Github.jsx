import React from 'react'
import MacWindow from '../MacWindow/MacWindow'
import githubData from '../../../assets/github.json'
import './github.scss'


const GitCard = ({data={id:1,image:"",title:"",description:"",tags:[],repoLink:"",demoLink:""}}) =>{
    return(
        <div className='card'>
            <img src={data.image} className='cardImage' />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div className="tags">
                {data.tags.map((tag,index)=>{
                    return <div key={index} className="tag">{tag}</div>
                })}
            </div>
            <div className="urls">
                <a href={data.repoLink} target='_blank' >Repository</a>
                <a href={data.demoLink} target='_blank'>Live Demo</a>
            </div>

        </div>
    )
    
}

function Github({windowName,setWindowState}) {
  return (
    <MacWindow width='50vw' windowName={windowName} setWindowState={setWindowState}>
        <div className="cards">
            {githubData.map((project,index)=>{
                return <GitCard key={index} data={project} />
            })}
        </div>
    </MacWindow>
  )
}

export default Github