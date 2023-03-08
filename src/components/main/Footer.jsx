import classes from "../../assets/styles/components/footer.module.scss"
import {
  BiCopy
} from "react-icons/bi"
import {
  BsFacebook,
  BsTwitter,
} from "react-icons/bs"
import {
  AiFillInstagram
} from "react-icons/ai"

import { instagramLink } from "../../config/contact"

import { days } from "../../config/openingHours"

const Footer = () => {
  const address = "Hankovce xxs, 06601 xxxx"
  const email = "info@maracana.sk"
  const phone = "1-444-123-4559"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
  }

  return (
    <div className={classes.footer_wrap}>
      <div className={classes.footer}>
        <div
          className={classes.footer__opening_hours}
        >
          <h2>
            OPENING HOURS
          </h2>
          <div
            className={classes.footer__opening_hours_wrap}
          >
            {
              days.map(day =>
                <div
                  className={classes.footer__opening_hours_day}
                >
                  <h4>
                    { day.day }
                  </h4>
                  <h4>
                    { day.opening }
                  </h4>
                </div>
              )
            }

          </div>
        </div>
        <div
          className={classes.footer__contact_us}
        >
          <div>
            <h2>
              Contact us
            </h2>
            <div
              className={classes.footer__contact_us_contact}
            >
              <div
                className={classes.footer__contact_us_contact_element}
              >
                <h4>
                  { address }
                </h4>
              </div>
              <div
                className={classes.footer__contact_us_contact_element}
              >
                <h4>
                  { email }
                </h4>
                <BiCopy
                  className={classes.footer__contact_us_contact_element_button}
                  onClick={handleCopyEmail}
                />
              </div>
              <div
                className={classes.footer__contact_us_contact_element}
              >
                <h4>
                  { phone }
                </h4>
              </div>
            </div>
          </div>
          {/* <div>
            <h2>
              FOllow us
            </h2>
            <div
              className={classes.footer__contact_us_follow_us}
            >
              <BsFacebook
                className={classes.footer__contact_us_contact_element_button}
                size="30px"
                onClick={ () => redirect("fb") }
              />
              <AiFillInstagram
                className={classes.footer__contact_us_contact_element_button}
                size="30px"
                onClick={ () => redirect("ig") }
              />
              <BsTwitter
                className={classes.footer__contact_us_contact_element_button}
                size="30px"
                onClick={ () => redirect("tw") }
              />
            </div>
          </div> */}
        </div>
      </div>
      <div className={classes.footer_map_wrap}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.1328161584674!2d21.947495!3d49.027080899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473eb3c10ed26783%3A0xa406bc0689142aa9!2sMaracana%20cafe%20%26%20bar%20%26%20ice%20cream!5e0!3m2!1ssk!2suk!4v1678270911787!5m2!1ssk!2suk"
        className={classes.footer_map}
        style={{
          "border":"0",
          "border-radius": "8px"
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.1328161584674!2d21.947495!3d49.027080899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473eb3c10ed26783%3A0xa406bc0689142aa9!2sMaracana%20cafe%20%26%20bar%20%26%20ice%20cream!5e0!3m2!1ssk!2suk!4v1678270911787!5m2!1ssk!2suk"

        style={{
          "border":"0",
          "border-radius": "8px"
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </div>
  )
}

export default Footer