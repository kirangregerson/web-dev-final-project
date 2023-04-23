const ProfileComment = ({comment, productId}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>
                        <a href={"/details/".concat(productId)}>
                            <div className="fw-bolder">{comment}</div>
                        </a>
                    </div>
                </div>
                {/*<div className="col-2">*/}
                {/*    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>*/}
                {/*</div>*/}
            </div>
        </li>
    )
}
export default ProfileComment;