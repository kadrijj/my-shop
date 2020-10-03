import React from "react";
import Balcony from "./Assets/balcony.png";
import goaldigger from "./Assets/goaldigger.jpg";


const Blog = () => {
    return (
        <>
            <div className="blog">
                <div className="blogpost">
                    <img className="blogpost-img" src={Balcony} />
                    <div className="blogpost-copy">
                        <h2>Tapas on your balcony</h2>
                        <p>Small plates of food shared among friends. To get you started, we’ve got some easy tapas recipes, ranging from effortless to intense. And don’t forget; shareables are even better with a statement t-shirt. We have tested this, your t-shirt can be a conversation starter!</p>
                    </div>
                </div>
                <div className="blogpost">
                    <img className="blogpost-img" src={goaldigger} />
                    <div className="blogpost-copy">
                        <h2>Are you good at wasting your time right?</h2>
                        <p>You have many ideas for little projects, but you are not sure where to start? Change your mindset! I sit in my chair
                        I look at the street
                        The neighbor returns. My smile of defeat</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Blog;