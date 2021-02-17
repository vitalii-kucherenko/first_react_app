import React from 'react'
import Styles from './post.module.css'


const Post = () => {
    return (
        <div>
            <AddPost/>
            <Posts/>
        </div>

    )
}

const AddPost = () => {
    return (
        <div>
            <div>
                <input type="text"/>
                <button>send</button>
            </div>
        </div>
    )
}

const Posts = () => {
    return (
        <div>
            <div className={Styles.post_item}>
                <img
                    src="https://lh3.googleusercontent.com/proxy/LG1_LQs4HbfccPcRjzzaT5oJ1JcbSLjjY5HgrqoUKGMuWZYuh_uYLy2E0DbMt8t1BiPCcwx4vCmv6DcYRgBzAAEn7bzt-7ziMQeHl_75JYEAZPSt41ojj0FcZnZsZgALXEAW1ERMJY-YF_0LNPZgYqdvja4WfOKqYwuXiekaug"
                    alt=""/>
            </div>
            <div>
                text
            </div>
        </div>
    )
}

export default Post