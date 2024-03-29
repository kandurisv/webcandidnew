import Post from "./Post"


const UserPage = ({content}) => {
    return (
        <div className = "px-2 my-2 items-center mx-auto justify-self-center ">
            {
                content.data.map((item,index)=>{
                    return(
                        <div key = {index} >
                            <Post item = {item}/>
                        </div>
                        )
                })
            }
        </div>
    )
}

//sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4

export default UserPage
