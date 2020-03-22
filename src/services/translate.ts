import english from "./translations/en";
import german from "./translations/de";
import * as Localization from "expo-localization";

export default function t(key: keyof typeof english & keyof typeof german) {
  switch (Localization.locale) {
    case "de":
      return german[key] || english[key];
    default:
      return german[key] || english[key];

      return english[key];
  }
}
