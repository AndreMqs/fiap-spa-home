import {ReactComponent as LogoWhite} from "../../../images/LogoWhite.svg";
import {ReactComponent as Intagram} from "../../../images/Instagram.svg";
import {ReactComponent as WhatsApp} from "../../../images/WhatsApp.svg";
import {ReactComponent as Youtube} from "../../../images/Youtube.svg";

import styles from "./FooterHomePage.module.scss"


export default function FooterHomePage() {

  return (
    <div id='footerContainer' className={styles.footerContainer}>
      <div className={styles.links}>
        <span className={styles.linkHeader}>Serviços</span>
        <span className={styles.singleLink}>Conta corrente</span>
        <span className={styles.singleLink}>Conta PJ</span>
        <span className={styles.singleLink}>Cartão de crédito</span>
      </div>

      <div className={styles.links}>
        <span className={styles.linkHeader}>Contato</span>
        <span className={styles.singleLink}>0800 004 250 08</span>
        <span className={styles.singleLink}>meajuda@bytebank.com.br</span>
        <span className={styles.singleLink}>ouvidoria@bytebank.com.br</span>
      </div>
      
      <div className={styles.logoLinks}>
        <span className={styles.linkHeader}>Desenvolvido por André Câmara</span>
        <span>
          <LogoWhite
            alt="logo"
            className={styles.logo}
          />
        </span>
        <div className={styles.icons}>
          <span>
            <Intagram
              alt="Instagram"
              className={styles.logo}
            />
          </span>
          <span>
            <WhatsApp
              alt="WhatsApp"
              className={styles.logo}
            />
          </span>
          <span>
            <Youtube
              alt="Youtube"
              className={styles.logo}
            />
          </span>
        </div>
      </div>
    </div>
  );
}