import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import Title from './Title'

const Posts = () => {
    const [postTitle, setPostTitle] = useState(null)

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        fetch(apiUrl).then(date => date.json()).then(json => {
            const createElement = json.map(post => {
                return <ListGroup.Item key={post.id}><Title key={post.id} title={post.title} body={post.body}/></ListGroup.Item>
            })
            setPostTitle(createElement)
        })
    }, [])

    

    return <div>
        {!postTitle ? 'Loading' : postTitle}   
    </div>
}

export default Posts