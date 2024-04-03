import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfileImage } from "../../redux/usersSlice";
import { useAuth } from "../../context/AuthContext";
import {
  uploadFilesToCloud,
  getFilesFromCloud,
  USER_FILES,
  PROFILE_IMAGE,
} from "../../firebase/handleCloudFiles";
import { RingLoader } from "react-spinners";
import defaultProfileImage from "../../assets/images/default-profile-image.png";
import styles from "./account.module.css";

function ProfileImage() {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const [loadingImage, setLoadingImage] = useState(false);
  const [profileImage, setProfileImage] = useState(
    useSelector((state) => state.usersData.user.profileImage)
  );

  const getImagesFromCloud = useCallback(async () => {
    if (currentUser) {
      setLoadingImage(true);
      const image = await getFilesFromCloud(
        USER_FILES,
        currentUser.id,
        PROFILE_IMAGE
      );
      if (image) {
        setProfileImage(image);
        dispatch(setUserProfileImage(image));
      }
    }

    setLoadingImage(false);
  }, [currentUser, dispatch]);

  const uploadImagesToCloud = async (event) => {
    setLoadingImage(true);
    const image = event.target.files[0];
    await uploadFilesToCloud(USER_FILES, currentUser.id, PROFILE_IMAGE, image);
    getImagesFromCloud();
  };

  useEffect(() => {
    if (!profileImage) {
      getImagesFromCloud();
    }
  }, [profileImage, getImagesFromCloud]);

  return (
    <section className={styles.profileImage}>
      <div className={styles.profileImageContent}>
        {loadingImage ? (
          <RingLoader color="#8c0075" />
        ) : (
          <img
            src={profileImage || defaultProfileImage}
            id={styles.profileImgTag}
            alt="Avatar"
          />
        )}
      </div>
      <input
        type="file"
        name="profile_image"
        className={styles.uploadImageInput}
        onChange={uploadImagesToCloud}
      />
    </section>
  );
}

export default ProfileImage;
