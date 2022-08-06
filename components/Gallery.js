import Image from "next/image";
import ThirdPost from "../pages/posts/ThirdPost";
import styles from "./gallery.module.css";

export default function Gallery({ userName  }) {
    return(
        <div
         className={styles.gallery}>
            <div
             className="gallery-item">
                <Image
                priority
                src="/images/profile.jpg"
                className={styles.borderCircle}
                height={144}
                width={144}
                alt='Profile'
            />
             </div>
        </div>
    );
}

Gallery.getInitialProps = () => {
    return { userName: 'Brychxpin' }
}