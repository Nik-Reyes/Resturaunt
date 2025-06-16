import { utils } from "../../utils/Helpers/helpers.js";
import signUpImage from "../../assets/images/signUpImage.jpg";
import "./signUp.css";

export function signup() {
  const signupWrapper = utils.generateElement("div", "signup-wrapper");
  const title = utils.generateElement("div", "signup-title");
  const titleText = utils.generateElement(
    "p",
    "title-text",
    "Sign up for our tasty newsletter"
  );

  const imageWrapper = utils.generateElement("div", "nl-img-wrapper");
  const img = utils.generateElement("img", "news-img", signUpImage);

  const emailSection = utils.generateElement("div", "email-section");
  const newsletterSubtitle = utils.generateElement("div", "signup-subtitle");
  const newsLetterSubText = utils.generateElement(
    "p",
    "nl-subtitle",
    "Sign up with your email address to recieve news and updates"
  );

  const form = utils.generateElement("form", "signup-form");
  const formControlWrapper = utils.generateElement(
    "div",
    "form-control-wrapper"
  );
  const mailFormControl = utils.generateElement("div", "form-control");
  const label = utils.generateElement("label", "signup-label");
  const labelTitle = utils.generateElement("span", "nl-label-title", "Email");
  label.htmlFor = "mail";
  const input = utils.generateElement("input", "signup-input");
  input.type = "email";
  input.name = "newsLetterSignup";
  input.placeholder = "Email Address";
  input.autocomplete = "email";

  const btnFormControl = utils.generateElement("div", "form-control");
  const submitButton = utils.generateElement("button", "signup-btn", "Sign Up");
  submitButton.type = "submit";

  label.append(labelTitle, input);
  mailFormControl.append(label, input);
  btnFormControl.appendChild(submitButton);
  formControlWrapper.append(mailFormControl, btnFormControl);
  form.appendChild(formControlWrapper);
  newsletterSubtitle.appendChild(newsLetterSubText);
  emailSection.append(newsletterSubtitle, form);
  imageWrapper.appendChild(img);
  title.appendChild(titleText);
  signupWrapper.append(title, imageWrapper, emailSection);

  return signupWrapper;
}
