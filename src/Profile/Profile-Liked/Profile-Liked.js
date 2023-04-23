const ProfileLiked = ({productId}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>
                        <a href={"/details/".concat(productId)}>
                            <div className="fw-bolder">{productId}</div>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default ProfileLiked;