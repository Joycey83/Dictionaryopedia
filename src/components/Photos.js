import styles from "../components/Photos.module.css";
const Photo = (props) => {
  console.log(props.photos);
  if (props.photos) {
    return (
      <>
        <div className="Photos">
          <div className="row">
            {props.photos.map(function (photo, index) {
              if (index < 9) {
                return (
                  <div className="col-lg-4 col-md-4" key={index}>
                    <a href={photo.src.original} target="_blank">
                      <img
                        src={photo.src.landscape}
                        alt={photo.alt}
                        className={`img-fluid ${styles["word--img"]}`}
                      />
                    </a>{" "}
                  </div>
                );
              }
            })}{" "}
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};
export default Photo;
