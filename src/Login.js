import styles from "./Login.module.css";
import Logo from "./assets/facebook.svg"

const Login = () => {
    return(
        <div className={styles.appBody}> 
           <div className={styles.appBodyContent}>
            <div className={styles.appBodyContentOne}>
                 <div className={styles.itemOneLogo}>
                    <img src={Logo} alt="main-logo"/>
                    <div className={styles.itemOneTagLine} />
                    <p>Facebook helps you connect and share with the people in your life.</p>
                 </div>

            </div>
            <div className={styles.appBodyContentTwo}>
                <div className={styles.itemData}>
                    <div className={styles.items}>
                        <input type="email" placeholder="Enter your email" />
                        <input type="password" placeholder="Enter your password" />
                        <button>Login</button>
                        <p>Forgot Password?</p>
                        <button className={styles.createButton}>Create Account</button>
                    </div>
                </div>
            </div>
            </div>
         </div>
    );
}

export default Login;