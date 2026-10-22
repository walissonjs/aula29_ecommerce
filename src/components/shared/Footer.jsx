import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import logoGt from '../../assets/logo-gt.png'
import './Footer.css'

/* ATENDIMENTO AO CLIENTE */
const supportLinks = ['Central de ajuda', 'Como comprar', 'Métodos de pagamento', 'Trocas e devoluções', 'Fale conosco']

/* OUTRA FORMA DE CRIAR HIPERLINKS DENTRO DA ÁREA DE ATENDIMENTO AO CLIENTE:
const supportLinks = [
  { label: 'Central de ajuda', path: '/ajuda' },
  { label: 'Como comprar', path: '/como-comprar' },
  { label: 'Métodos de pagamento', path: '/pagamento' },
  { label: 'Trocas e devoluções', path: '/trocas-e-devolucoes' },
  { label: 'Fale conosco', path: '/contato' }, ]

/* SOBRE A EMPRESA */
const storeLinks = ['Sobre n7ós', 'Políticas da loja', 'Política de privacidade', 'Programa de afiliados', 'Seja um parceiro']

/* REGIÃO - - ATUALIZAÇÃO MONETÁRIA*/
const regions = ['Brasil', 'Portugal', 'Argentina', 'Chile', 'México']

const socialLinks = [
  { label: 'Instagram', icon: faInstagram, url: 'https://instagram.com' },
  { label: 'TikTok', icon: faTiktok, url: 'https://tiktok.com' },
  { label: 'WhatsApp', icon: faWhatsapp, url: 'https://wa.link/rc86uj' },
  { label: 'Facebook', icon: faFacebook, url: 'https://facebook.com' },
  { label: 'LinkedIn', icon: faLinkedin, url: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <section>
          <h2>Atendimento ao cliente</h2>
          <ul>
            {supportLinks.map((link) => <li key={link}><a href="#">{link}</a></li>)}
          </ul>
        </section>

        <section>
          <h2>Sobre a GT Store</h2>
          <ul>
            {storeLinks.map((link) => <li key={link}><a href="#">{link}</a></li>)}
          </ul>
        </section>

        <section>
          <h2>Pagamento</h2>
          <div className="site-footer__payments" aria-label="Formas de pagamento aceitas">
            {['VISA', 'Mastercard', 'ELO', 'PIX', 'Boleto', 'AMEX'].map((payment) => (
              <span key={payment}>{payment}</span>
            ))}
          </div>
        </section>

        <section>
          <h2>Siga-nos</h2>
          <ul className="site-footer__social">
            {socialLinks.map(({ label, icon, url }) => (
              <li key={label}>
                <a href={url}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={icon} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Baixe o app GT Store</h2>
          <div className="site-footer__app">
            <img src={logoGt} alt="Logo GT Store" className="site-footer__qr" /> {/*Trazendo a logo para o footer */}
            <div className="site-footer__stores">
              <a href="https://www.apple.com/br" target="_blank" rel="noopener noreferrer">App Store</a>
              <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">Google Play</a>
            </div>
          </div>
        </section>
      </div>

      <div className="site-footer__bottom">
        <span>© 2026 GT Store. Todos os direitos reservados.</span>
        <nav aria-label="Regiões disponíveis">
          <span>País e região:</span>
          {regions.map((region) => <a href="#" key={region}>{region}</a>)}
        </nav>
      </div>
    </footer>
  )
}


/* OUTRA FORMA DE CRIAR HIPERLINKS DENTRO DA ÁREA DE ATENDIMENTO AO CLIENTE:

const supportLinks = [
  { label: 'Central de ajuda', path: '/ajuda' },
  { label: 'Como comprar', path: '/como-comprar' },
  { label: 'Métodos de pagamento', path: '/pagamento' },
  { label: 'Trocas e devoluções', path: '/trocas-e-devolucoes' },
  { label: 'Fale conosco', path: '/contato' },

  export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <section>
          <h2>Atendimento ao cliente</h2>
          <ul>
            {supportLinks.map(({label, path}) => <li key={label}><a href={path}>{label}</a></li>)}
          </ul>
        </section>
*/